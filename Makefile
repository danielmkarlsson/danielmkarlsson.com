all:
	@mkdir -p build
	@bin/targets.sh && echo "Done"
#	@bin/copy-audio.sh && echo "Copied audio"

# publish to production
publish: all
	rsync -azP build/ root@212.47.227.131:/var/www/danielmkarlsson.com/html/

# start live server
preview: all
	live-server build --cors

clean:
	rm -rf build
