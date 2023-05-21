package com.example.audioenvideo

import android.media.MediaPlayer
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.VideoView

class MainActivity : AppCompatActivity() {
    private var mediaPlayer: MediaPlayer? = null
    private var videoView: VideoView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        mediaPlayer = MediaPlayer.create(this, R.raw.audio)
        videoView = findViewById(R.id.videoView)
        videoView?.setVideoPath("android.resource://" + packageName + "/" + R.raw.video)

        val btnPlayAudio = findViewById<Button>(R.id.btnPlayAudio)
        btnPlayAudio.setOnClickListener { playAudio() }

        val btnPauseAudio = findViewById<Button>(R.id.btnPauseAudio)
        btnPauseAudio.setOnClickListener { pauseAudio() }

        val btnStopAudio = findViewById<Button>(R.id.btnStopAudio)
        btnStopAudio.setOnClickListener { stopAudio() }

        val btnPlayVideo = findViewById<Button>(R.id.btnPlayVideo)
        btnPlayVideo.setOnClickListener { playVideo() }

        val btnPauseVideo = findViewById<Button>(R.id.btnPauseVideo)
        btnPauseVideo.setOnClickListener { pauseVideo() }

        val btnStopVideo = findViewById<Button>(R.id.btnStopVideo)
        btnStopVideo.setOnClickListener { stopVideo() }
    }

    private fun playAudio() {
        if (!mediaPlayer?.isPlaying!!) {
            mediaPlayer?.start()
        }
    }

    private fun pauseAudio() {
        if (mediaPlayer?.isPlaying == true) {
            mediaPlayer?.pause()
        }
    }

    private fun stopAudio() {
        if (mediaPlayer?.isPlaying == true || mediaPlayer?.isLooping == true) {
            mediaPlayer?.stop()
        }
        mediaPlayer?.reset()
        mediaPlayer?.setDataSource("android.resource://" + packageName + "/" + R.raw.audio)
        mediaPlayer?.prepare()
    }

    private fun playVideo() {
        if (!videoView?.isPlaying!!) {
            videoView?.start()
        }
    }

    private fun pauseVideo() {
        if (videoView?.isPlaying == true) {
            videoView?.pause()
        }
    }

    private fun stopVideo() {
        if (videoView?.isPlaying == true) {
            videoView?.stopPlayback()
        }
        videoView?.seekTo(0)
    }
}