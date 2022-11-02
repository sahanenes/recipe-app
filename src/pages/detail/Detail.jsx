import { useLocation, useNavigate } from "react-router-dom";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngContainer,
  OtherPart,
  GoBackButton,
} from "./Detail.style";
import diet from "../../assets/diet.svg";

const Detail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{state.label}</h1>
        <img src={diet} alt="diet" />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <h4>NUTRIENTS</h4>

          <p>
            {state.totalNutrients.CA.label} :{" "}
            {Math.round(state.totalNutrients.CA.quantity)}
            {state.totalNutrients.CA.unit}
          </p>
          <p>
            {state.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(state.totalNutrients.CHOCDF.quantity)}
            {state.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.totalNutrients.CHOLE.label} :{" "}
            {Math.round(state.totalNutrients.CHOLE.quantity)}
            {state.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{state.totalWeight}</p>
          <p>Calories: {Math.round(state.calories)}</p>
          {state.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>
        <ImgContainer>
          <img src={state.image} alt="imag" />
        </ImgContainer>
        <IngContainer>
          {state.ingredientLines.map((ingredinet, index) => (
            <div>
              <p>
                {index + 1}-{ingredinet}
              </p>
            </div>
          ))}
        </IngContainer>
      </DetailPart>
      <GoBackButton onClick={() => navigate(-1)}>Go back</GoBackButton>
    </DetailContainer>
  );
};

export default Detail;
