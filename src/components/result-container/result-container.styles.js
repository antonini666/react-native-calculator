import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const ComponentStyled = {
  Container: styled.View`
    height: ${hp("20%")}px;
  `,
  ResultContainer: styled.View`
    flex: 1
    align-items: flex-end;
    justify-content: flex-end;
    padding: 10px 25px;
  `,
  ResultText: styled.Text`
    font-size: ${wp("20%")}px;
    color: #ffffff;
  `,
};
