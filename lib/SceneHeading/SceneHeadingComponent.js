import { TextBlockComponent } from 'substance'

class SceneHeadingComponent extends TextBlockComponent {
  render($$) {
    return super.render($$)
        .addClass('sc-sceneHeading')
  }
}

export default SceneHeadingComponent