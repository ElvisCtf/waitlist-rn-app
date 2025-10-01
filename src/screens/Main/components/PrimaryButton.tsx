import { styles } from "@/src/styles/styles";
import { Text, TouchableOpacity } from "react-native";

interface PrimaryButtonProps {
  isJoin: boolean;
  setIsJoin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PrimaryButton({isJoin, setIsJoin}: PrimaryButtonProps) {
  const buttonStyle = [styles.outlineButton, isJoin ? styles.redBorder : styles.greenBorder];
  const buttonText = isJoin ? 'EXIT QUEUE' : 'JOIN QUEUE';
  const buttonTextStyle = isJoin ? styles.redText : styles.greenText;

  const onPress = () => {
      setIsJoin(prev => !prev);
  }

  return(
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
}