import React, { Component } from 'react';
import PropTypes from 'prop-types';
const Lipsum = require('node-lipsum');

class Article extends Component {
  render() {
    return (
      <article>
        <h1>This is the title</h1>
        <h2>I. M. Author (25-11-2018)</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          ipsum in nisi faucibus rhoncus. Ut auctor, tellus ut finibus gravida,
          tortor urna mollis nisi, id dapibus lorem arcu in dui. Pellentesque eu
          velit metus. Nullam mauris ex, convallis vitae massa nec, pretium
          vehicula libero. Morbi rhoncus vestibulum tempus. Nulla facilisi.
          Etiam a risus at lectus luctus lacinia quis a ligula. In id justo at
          odio semper efficitur dictum at turpis. Nunc lacinia accumsan lectus a
          sollicitudin. Aliquam elementum ex sed dolor placerat, sit amet
          imperdiet neque dignissim. Quisque quis ipsum in risus accumsan
          ultrices. Ut nec urna euismod, malesuada eros vitae, feugiat arcu.
          Cras id ligula lacus. Morbi fermentum eleifend diam. Sed ornare auctor
          faucibus. Quisque justo lectus, ornare vitae fermentum sed, convallis
          quis arcu.
        </p>
        <p>
          Donec sit amet dictum nulla. Suspendisse at aliquam nisl. Proin
          malesuada magna eget felis ornare dapibus. Etiam varius orci et tempus
          molestie. In ullamcorper urna et neque aliquam, sed tristique elit
          sagittis. Aliquam vel placerat eros, sed tristique quam. Vestibulum
          accumsan urna non iaculis suscipit. Etiam in risus eleifend, ornare
          purus laoreet, faucibus mi. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Cras turpis ligula,
          egestas sed pharetra eu, imperdiet ac magna.
        </p>
        <p>
          Aenean viverra neque et lacinia fringilla. Fusce finibus ex in lacus
          mattis dignissim. Nunc mattis ac magna et tempus. Phasellus ornare ex
          vestibulum tincidunt sagittis. Donec imperdiet magna a nulla
          sollicitudin, vel blandit nisi tincidunt. Sed tempus vestibulum sem,
          vel cursus elit ornare non. Vestibulum in dignissim urna. Nam
          vulputate vehicula ipsum. Vivamus ultricies magna vitae sapien
          faucibus aliquam. Sed eu ultricies arcu. Suspendisse vel nisi eu magna
          posuere blandit. Ut finibus odio nec pellentesque condimentum. Integer
          eget ante id quam bibendum consequat sit amet et odio. Donec blandit,
          est et eleifend venenatis, tellus orci convallis quam, quis mollis mi
          enim et dolor. Curabitur mattis auctor arcu, eu viverra lorem. Ut at
          lacus nec quam efficitur porta.
        </p>
        <p>
          Integer mattis est lectus, non sodales sapien pulvinar ac. Nulla
          interdum tincidunt ultricies. Fusce aliquam porttitor turpis.
          Pellentesque a risus tortor. Etiam aliquam arcu mi, sit amet porta
          nisl sollicitudin et. Suspendisse a euismod purus. Proin posuere quam
          a lacinia fringilla. Aliquam nec dictum mi, a suscipit justo. Aenean
          vulputate sollicitudin augue, bibendum sodales tellus gravida quis.
          Duis dictum lacinia augue sit amet sagittis. Integer id purus ac risus
          commodo dictum id sit amet lacus. Nunc sit amet massa sit amet nisl
          convallis pharetra. Curabitur faucibus quam non ullamcorper blandit.
          Proin dignissim enim eget sem elementum, eget vehicula neque commodo.
        </p>
        <p>
          Sed blandit orci quis malesuada aliquam. Morbi vel lacus est. Vivamus
          a justo et tellus lobortis posuere. Donec ac urna mi. Etiam tortor
          lectus, tincidunt ut massa id, convallis ornare diam. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Aenean commodo, neque nec elementum viverra, mi erat
          egestas tellus, nec commodo metus neque quis justo. Mauris at
          scelerisque mauris. Nunc consequat velit ac orci rutrum, mollis
          elementum erat egestas. Quisque lobortis lacus metus, et varius est
          bibendum nec. Integer dignissim, elit id porttitor ullamcorper, massa
          massa egestas nisi, et imperdiet massa ipsum viverra diam. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Nullam dignissim convallis risus.
        </p>
      </article>
    );
  }
}

Article.propTypes = {};

export default Article;
