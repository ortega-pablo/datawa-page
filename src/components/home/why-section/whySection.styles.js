import styled from "styled-components";
import theme from "../../../styles/theme";

export const WhySectionContainer = styled.section`
  width: 1440px;
  height: auto;
  padding: 110px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.platinum};
`;

export const BannerWhy = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const BannerTitle = styled.div`
  height: 180px;
  width: 500px;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: ${theme.colors.BurntSienna};
  position: absolute;
  top: 0;
  left: 40px;
`;

export const Subtitle = styled.p`
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 45px;
  margin: 10px 0;
  position: absolute;
  top: 20px;
  left: 40px;
`;

export const VerticalBar = styled.div`
  border-left: 4px solid ${theme.colors.BurntSienna};
  position: absolute;
  height: 160px;
  top: 0;
  left: 0;
`;

export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  width: 400px;
  font-size: 16px;
  font-weight: 400;
  margin-right: 40px;
`;

export const QualitiesSection = styled.div`
  width: 1200px;
  margin-top: 110px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PrincipalQuality = styled.div`
  height: 200px;
  width: 300px;
  position: relative;
`;
export const PrincipalSquare = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${theme.colors.BurntSienna};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
export const PrincipalNumber = styled.p`
  font-size: 90px;
  font-weight: 700;
  z-index: 200;
  position: absolute;
  top: 0px;
  left: 10px;
`;
export const PrincipalResume = styled.p`
  width: 150px;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  top: 120px;
  left: 0;
`;

export const OtherQualities = styled.div`
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: space-between;
`;

export const QualityContainer = styled.div`
  height: 150px;
  width: 350px;
  position: relative;
`;
export const QualitySquare = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${theme.colors.BurntSienna};
  position: absolute;
  top: 0;
  left: 20px;
  `;
export const QualityIcon = styled.div`
  position: absolute;
  width: 50px;
  font-size: 60px;
  top: 20px;
  left: 0;
  z-index: 1;
  `;
export const QualityTitle = styled.h3`
  width: 140px;
  line-height: 25px;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  top: 0;
  left: 100px;
  `;
export const QualityResume = styled.p`
  position: absolute;
  font-size: 14px;
  font-weight: 500;
  top: 60px;
  left: 100px;
`;
