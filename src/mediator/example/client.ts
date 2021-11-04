import Mediator from './mediator'
import Component from './component'

const mediator = new Mediator()
const component1 = new Component(mediator, 'component1')
const component2 = new Component(mediator, 'component2')
const component3 = new Component(mediator, 'component3')

mediator.add(component1)
mediator.add(component2)
mediator.add(component3)

component1.notify('data A')
component2.notify('data B')
component3.notify('data C')