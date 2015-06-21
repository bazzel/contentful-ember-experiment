export default function(){
  this.transition(
    this.fromRoute('posts'),
    this.toRoute('post'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
