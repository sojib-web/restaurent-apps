import BodyComponet from "./body/BodyComponet"
import FooterComponet from "./footer/FooterComponet"
import HeaderComponet from "./header/HeaderComponet"

const MainComponet = () => {
  return (
    <div>
        <HeaderComponet/>
        <BodyComponet/>
        <FooterComponet/>
    </div>
  )
}

export default MainComponet