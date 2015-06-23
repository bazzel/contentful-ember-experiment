export default function(){
  this.transition(
    this.fromRoute('posts'),
    this.toRoute('post'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.childOf('.posts'),
    this.use('explode', {
      matchBy: 'data-post-id',      // matchBy will look for the same
                                    // HTML attribute value in both
                                    // the old and new elements, and
                                    // for each matching pair, it
                                    // runs the given transition.

                                    // fly-to is a built in transition that animate the element
                                    // moving from the position of oldElement to the position of
                                    // newElement.
      use: ['fly-to', { duration: 100, easing: [250, 15] }]
    })
  );
};
