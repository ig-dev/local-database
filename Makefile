.PHONY: test test-once

wait-for-changes = inotifywait -qq -e close_write,moved_to,create test/ src/

build-test = tsc --outDir test-build/ --rootDir ./ --project test/;

test:
	@while : ; do \
		make test-once --quiet & \
		$(wait-for-changes); \
		kill $$!; \
	done
	
test-once:
	@echo "Building..."
	@rm -Rf test-build/test/
	@$(build-test)
	clear;
	@mocha test-build/test