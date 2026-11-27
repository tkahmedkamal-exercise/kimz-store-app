import IconBadge from "../icon-badge/icon-badge";
import InfoCard from "../info-card/info-card";
import StatusBill from "../status-bill/status-bill";
import { PaymentCardProps } from "./types";

const PaymentCard = ({
  cardNumber,
  cardType,
  expiryDate,
  variant,
  isSelected,
  isDefault,
  onPress,
  style,
}: PaymentCardProps) => {
  const formattedCardNumber = `•••• •••• •••• ${cardNumber}`;
  const IconColors = isDefault ? "info" : variant;

  return (
    <InfoCard onPress={onPress} style={style} isSelected={isSelected}>
      <InfoCard.Leading
        title={formattedCardNumber}
        description={`${cardType} · Expires ${expiryDate}`}
      />
      <InfoCard.Trailing>
        <IconBadge iconName="credit-card" color={IconColors} />
        {isDefault && (
          <StatusBill iconName="check" label="Default" color="info" />
        )}
      </InfoCard.Trailing>
    </InfoCard>
  );
};

export default PaymentCard;
