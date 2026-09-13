#include "MoralTrialComponent.h"
#include "GameFramework/Character.h"
#include "GameFramework/CharacterMovementComponent.h"

UMoralTrialComponent::UMoralTrialComponent()
{
    PrimaryComponentTick.bCanEverTick = false;
    CurrentSpiritualVigilance = MaxSpiritualVigilance;
}

void UMoralTrialComponent::EvaluateChoice(const FScriptureChoice& SelectedChoice)
{
    const float OldVigilance = CurrentSpiritualVigilance;
    CurrentSpiritualVigilance = FMath::Clamp(
        CurrentSpiritualVigilance + SelectedChoice.VigilanceCostOrReward,
        0.0f,
        MaxSpiritualVigilance
    );

    OnVigilanceChanged.Broadcast(CurrentSpiritualVigilance, CurrentSpiritualVigilance - OldVigilance);

    if (SelectedChoice.bIsCorrectScriptureRebuke && SelectedChoice.bTriggersImmediateFlight)
    {
        CurrentTrialState = ETrialState::Fleeing;
        OnTrialStateChanged.Broadcast(CurrentTrialState);
        TriggerFlight();
    }
    else if (CurrentSpiritualVigilance <= 0.0f)
    {
        CurrentTrialState = ETrialState::TrialCompromised;
        OnTrialStateChanged.Broadcast(CurrentTrialState);
    }
}

void UMoralTrialComponent::TriggerFlight()
{
    ACharacter* OwnerChar = Cast<ACharacter>(GetOwner());
    if (OwnerChar && OwnerChar->GetCharacterMovement())
    {
        OwnerChar->GetCharacterMovement()->MaxWalkSpeed *= 1.4f;
    }
}

void UMoralTrialComponent::ApplyEnvironmentalTemptation(float DeltaTime, float DrainRate)
{
    if (CurrentTrialState == ETrialState::InDialogue || CurrentTrialState == ETrialState::Exploring)
    {
        CurrentSpiritualVigilance = FMath::Clamp(
            CurrentSpiritualVigilance - (DrainRate * DeltaTime),
            0.0f,
            MaxSpiritualVigilance
        );
        OnVigilanceChanged.Broadcast(CurrentSpiritualVigilance, -(DrainRate * DeltaTime));
    }
}
