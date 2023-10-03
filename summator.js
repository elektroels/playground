
function summator(input) {
	  this.$this = this;
	  $this.sum = 0;

	  $this.sum = input + $this.sum;

	$this.chain = (input) => {
		  $this.sum = input + $this.sum;
		  return $this;
	};

	$this.result = () => {
		  console.log($this.sum);
		  return $this;
	};

	  return $this;
}

summator(1).chain(2).result();

