const h = require('react-hyperscript')
const { compose } = require('recompose')
const { partial } = require('ramda')
const { connect: connectStyles } = require('react-fela')
const { connect: connectStore } = require('redux-bundler-react')
const Typography = require('material-ui/Typography').default
const Button = require('material-ui/Button').default

const styles = require('../styles/landing')

module.exports = compose(
  connectStyles(styles),
  partial(connectStore, [
    'doUpdateUrl'
  ])
)(Landing)

function Landing (props) {
  const {
    styles,
    updateUrl
  } = props

  return (
    h('div', {
      className: styles.container
    }, [
      h('header', {
        className: styles.header
      }, [
        h(Typography, {
          variant: 'display4',
          color: 'default',
          align: 'center',
          className: styles.title
        }, [
          h('i', { className: 'em-svg em-peach' }),
          h('i', { className: 'em-svg em-cloud' })
        ]),
        h(Button, {
          variant: 'raised',
          color: 'primary',
          size: 'large',
          className: styles.startButton,
          component: 'a',
          href: '/onboarding/0'
        }, [
          'Start A Pub!'
        ])
      ])
    ])
  )
}
