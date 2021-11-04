import Light from './light'
import SwitchOnCommand from './switch-on-command'
import SwitchOffCommand from './switch-off-command'
import Switch from './switch'


const light = new Light()

const switchOn = new SwitchOnCommand(light)
const switchOff = new SwitchOffCommand(light)

const switch1 = new Switch()

switch1.register('on', switchOn)
switch1.register('off', switchOff)

switch1.execute('on')
switch1.execute('off')
switch1.execute('on')
switch1.execute('off')

switch1.showHistory()

switch1.replayLast(2)