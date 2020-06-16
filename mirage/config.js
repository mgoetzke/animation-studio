export default function() {
  this.get('/frames');
  this.post('/frames');
  this.get('/frames/:id');
  this.put('/frames/:id'); 
  this.del('/frames/:id');

  this.get('/animations');
  this.post('/animations');
  this.get('/animations/:id');
  this.put('/animations/:id'); 
  this.del('/animations/:id');

}
