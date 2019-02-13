import fgInput from './components/UIComponents/Inputs/formGroupInput.vue'
import DropDown from './components/UIComponents/Dropdown.vue'
import Badge from "./components/UIComponents/Badge"
import BaseAlert from "./components/UIComponents/BaseAlert"
import BaseButton from "./components/UIComponents/BaseButton"
import BaseCheckbox from "./components/UIComponents/BaseCheckbox"
import BaseInput from "./components/UIComponents/BaseInput"
import BasePagination from "./components/UIComponents/BasePagination"
import BaseProgress from "./components/UIComponents/BaseProgress"
import BaseRadio from "./components/UIComponents/BaseRadio"
import BaseSlider from "./components/UIComponents/BaseSlider"
import BaseSwitch from "./components/UIComponents/BaseSwitch"
import Card from "./components/UIComponents/Card"
import Icon from "./components/UIComponents/Icon"

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('fg-input', fgInput)
    Vue.component('drop-down', DropDown)
	  Vue.component(Badge.name, Badge)
    Vue.component(BaseAlert.name, BaseAlert)
    Vue.component(BaseButton.name, BaseButton)
    Vue.component(BaseInput.name, BaseInput)
    Vue.component(BaseCheckbox.name, BaseCheckbox)
    Vue.component(BasePagination.name, BasePagination)
    Vue.component(BaseProgress.name, BaseProgress)
    Vue.component(BaseRadio.name, BaseRadio)
    Vue.component(BaseSlider.name, BaseSlider)
    Vue.component(BaseSwitch.name, BaseSwitch)
    Vue.component(Card.name, Card)
    Vue.component(Icon.name, Icon)
  }
}

export default GlobalComponents
