install:	
	make install

calc:
	npx babel-node src/bin/brain-calc.js

even:
	npx babel-node src/bin/brain-even.js

gcd:
	npx babel-node src/bin/brain-gcd.js	

progression:
	npx babel-node src/bin/brain-progression.js

prime:
	npx babel-node src/bin/brain-prime.js

publish:
	publish --dry-run

lint:
	npx eslint .
