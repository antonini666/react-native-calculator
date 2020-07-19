import styled from "styled-components/native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const ComponentStyled = {
  ButtonContainer: styled.TouchableOpacity`
    width: ${(props) =>
      props.largeButtom ? `${hp("24%")}px` : `${hp("11%")}px`};
    height: ${hp("11%")}px;
    margin-right: ${(props) => (props.noMargin ? "0" : `${hp("2%")}px`)};
    justify-content: center;
    align-items: ${(props) => (props.largeButtom ? "flex-start" : "center")};
    padding-left: ${(props) => (props.largeButtom ? "28px" : "0")};
    border-radius: 50px;
    margin-bottom: 10px;
    background-color: ${(props) => props.backgroundColor};
  `,
  ButtonText: styled.Text`
    font-size: 30px;
    color: #ffffff;
  `,
};
