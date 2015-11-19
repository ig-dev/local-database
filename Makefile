.PHONY: build build-test test test-once

wait-for-changes = inotifywait -qq -e close_write,moved_to,create .

build:
	@echo "Yet to be implemented"

test:
	@$(wait-for-changes)
	
test-once:
	@echo "Yet to be implemented" 