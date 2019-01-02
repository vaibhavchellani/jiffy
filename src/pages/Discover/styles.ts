import styled from '@emotion/styled'

export const DiscoverContainer = styled.div`
  display: flex;
  font-size: 25px;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .rocket {
    position: absolute;
    opacity: 0.25;
    width: 953px;
    top: -332px;
    user-select: none;
    left: -192px;
    transform: scaleX(-1) rotate(-27deg);
  }
  .discoverText {
    padding: 0 36px;
  }
  .subheading {
    display: flex;
    justify-content: space-around;
  }
  .search {
    margin: 0 40px;
  }
  @media screen and (max-width: 768px) {
    display: block;
    .rocket {
      width: 263px;
      top: -72px;
      user-select: none;
      left: -62px;
    }
    .search {
      margin: 0 12px;
    }
  }

  @media screen and (max-width: 520px) {
    display: block;
    font-size: 15px;
    padding: 0 9px;
    .discoverText {
      padding: 0;
    }
  }
`
