#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "Engine/DataTable.h"
#include "MoralTrialComponent.generated.h"

UENUM(BlueprintType)
enum class ETrialState : uint8
{
    Exploring UMETA(DisplayName = "Exploring"),
    InDialogue UMETA(DisplayName = "In Dialogue"),
    Fleeing UMETA(DisplayName = "Fleeing"),
    TrialSuccess UMETA(DisplayName = "Trial Success"),
    TrialCompromised UMETA(DisplayName = "Trial Compromised")
};

USTRUCT(BlueprintType)
struct FScriptureChoice : public FTableRowBase
{
    GENERATED_BODY()

    UPROPERTY(EditAnywhere, BlueprintReadWrite)
    FText ChoiceText;

    UPROPERTY(EditAnywhere, BlueprintReadWrite)
    FText ScriptureReference;

    UPROPERTY(EditAnywhere, BlueprintReadWrite)
    bool bIsCorrectScriptureRebuke = false;

    UPROPERTY(EditAnywhere, BlueprintReadWrite)
    bool bTriggersImmediateFlight = false;

    UPROPERTY(EditAnywhere, BlueprintReadWrite)
    float VigilanceCostOrReward = 0.0f;
};

DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FOnVigilanceChanged, float, NewVigilance, float, Delta);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnTrialStateChanged, ETrialState, NewState);

UCLASS(ClassGroup = (Custom), meta = (BlueprintSpawnableComponent))
class THEASCENT_API UMoralTrialComponent : public UActorComponent
{
    GENERATED_BODY()

public:
    UMoralTrialComponent();

    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Spiritual Stats")
    float MaxSpiritualVigilance = 100.0f;

    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Spiritual Stats")
    float CurrentSpiritualVigilance = 100.0f;

    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Trial")
    ETrialState CurrentTrialState = ETrialState::Exploring;

    UPROPERTY(BlueprintAssignable, Category = "Trial Events")
    FOnVigilanceChanged OnVigilanceChanged;

    UPROPERTY(BlueprintAssignable, Category = "Trial Events")
    FOnTrialStateChanged OnTrialStateChanged;

    UFUNCTION(BlueprintCallable, Category = "Trial Actions")
    void EvaluateChoice(const FScriptureChoice& SelectedChoice);

    UFUNCTION(BlueprintCallable, Category = "Trial Actions")
    void TriggerFlight();

    UFUNCTION(BlueprintCallable, Category = "Trial Actions")
    void ApplyEnvironmentalTemptation(float DeltaTime, float DrainRate);
};
