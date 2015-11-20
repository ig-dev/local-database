.PHONY: test 

wait-for-changes = inotifywait -qq -e close_write,moved_to,create test/ src/

build-test = tsc --outDir test-build/ --rootDir ./ --project test/;

test:
	@while : ; do make test-and-wait --quiet; done
	
test-and-wait:
	@echo "Building..."
	@$(build-test)
	@mocha test-build/test
	@$(wait-for-changes)