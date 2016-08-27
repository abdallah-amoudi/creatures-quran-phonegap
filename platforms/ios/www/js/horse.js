document.addEventListener("deviceready", mediaAPI, false);

function mediaAPI() {

    $(function () {

        // Create simple media...

        var horseToPlay;
        var horseToPlay2;

        if (device.platform === 'Android') {
            sourceToPlay = '/android_asset/www/008060.mp3';
            sourceToPlay2 '/android_asset/www/016008.mp3';
        } else {
            sourceToPlay = '008060.mp3';
            sourceToPlay2 = '016008.mp3';
        }

        function mediaStatus(status) {

            $('#Duration').html(Math.floor(media.getDuration()));

            if (status === 0) {
                $('#MediaOutput').html('Sorry no media!');
            }

            if (status === 1) {
                $('#MediaOutput').html('Loading...');
            }

            if (status === 2) {
                $('#MediaOutput').html('Playing...');
            }

            if (status === 3) {
                $('#MediaOutput').html('Paused...');
            }

            if (status === 4) {
                $('#MediaOutput').html('Stopped!');
            }

        }

        function mediaError(errorOBJ) {
            $('#MediaOutput').html('There was a problem. Error code ' + errorOBJ.code);
        }

        var horseMedia = new Media(sourceToPlay, null, mediaError, mediaStatus);

        // Playback Controls...

        $('#horsePlay').on('touchend', function () {
            media.play();
        });

        $('#horsePause').on('touchend', function () {
            media.pause();
        });

        $('#horseStop').on('touchend', function () {
            media.stop();
        });

        $('#mediaVolume').on('touchend', function () {
            media.setVolume(0.1);
        });

        $('#mediaPosition').on('touchend', function () {

            media.getCurrentPosition(

                function (position) {

                    if (position > 0) {

                        $('#MediaPos').html(position + 'sec');

                    } else {

                        $('#MediaPos').html('Not Playing');

                    }

                },

                function (e) {

                    $('#MediaPos').html("Error getting position " + e);

                }

            );

        });

        $('#mediaSeek').on('touchend', function () {
            media.seekTo(2500);
        });

        $('#MediaClose, #mediaRelease').on('touchend', function () {
            media.release();
        });

    });

}