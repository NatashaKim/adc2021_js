import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../control_components/Slider'
import ButtonSet from '../control_components/ButtonSet'

export default class TremoloEffect extends Component {
  constructor(props) {
    super(props)
  }

  // Можно спользовать обновление тут, так как
  // componentDidUpdate() {
  // this.updateNodeParams()
  // }

  updateNodeParams = () => {
    // frequency: 10,
    // type: 'sine',
    // depth: 0.5,
    // spread: 180
    const { node, settings } = this.props
    const { wet, frequency, type, depth, spread } = settings

    node.wet.value = wet
    node.frequency.value = frequency
    node.type = type
    node.depth.value = depth
    node.spread = spread
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings } = this.props
    const { wet, type, frequency, delayTime, depth, spread } = settings
    const oscillatorTypes = ['sine', 'square', 'triangle', 'sawtooth']

    this.updateNodeParams()

    return (
      <div className="TremoloEffect">
        <h1>{name}</h1>

        <Slider
          name="Wet"
          property={['wet']}
          min={0}
          max={1}
          step={0.01}
          value={wet}
          handleChange={this.handlePropertyValueChange}
        />
      </div>

      // <Slider
      //   name="Frequency"
      //   property={['frequency']}
      //   min={0}
      //   max={100}
      //   step={1}
      //   value={frequency}
      //   handleChange={this.handlePropertyValueChange}
      // />
      //
      // <ButtonSet
      //   name="Type"
      //   property={['type']}
      //   value={type}
      //   options={oscillatorTypes}
      //   handleChange={this.handlePropertyValueChange}
      // />
      //
      // <Slider
      //   name="Depth"
      //   property={['depth']}
      //   min={0}
      //   max={1}
      //   step={0.01}
      //   value={depth}
      //   handleChange={this.handlePropertyValueChange}
      // />
      //
      // <Slider
      //   name="Spread"
      //   property={['spread']}
      //   min={0}
      //   max={180}
      //   step={1}
      //   value={spread}
      //   handleChange={this.handlePropertyValueChange}
      // />
    )
  }
}

TremoloEffect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
