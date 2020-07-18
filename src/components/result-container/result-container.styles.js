import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const ComponentStyled = {
  Container: styled.View`
    height: ${hp("20%")}px;
  `,
  MemoryContainer: styled.View`
    padding: 5px 15px;
  `,
  MemoryText: styled.Text`
    font-size: 20px;
    color: #777777;
  `,
  ResultContainer: styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 10px 15px;
  `,
  ResultText: styled.Text`
    font-size: ${wp("17%")}px;
    color: #ffffff;
  `,
};
