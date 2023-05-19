package com.example.notificaties

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Button
import android.widget.EditText
import androidx.core.app.NotificationCompat
import com.google.firebase.ktx.Firebase
import com.google.firebase.perf.FirebasePerformance;
import com.google.firebase.perf.ktx.performance
import com.google.firebase.perf.metrics.Trace;


class MainActivity : AppCompatActivity() {
    private val CHANNEL_ID = "bachproef"
    private val notificationId = 1

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        createNotificationChannel()

        val txtTitle = findViewById<EditText>(R.id.editTitle)
        txtTitle.setHint("Titel")
        val txtBody = findViewById<EditText>(R.id.editBody)
        txtBody.setHint("Beschrijving")
        val btnSendNotification = findViewById<Button>(R.id.buttonCreateNotification)

        btnSendNotification.setOnClickListener(object : View.OnClickListener {
            override fun onClick(v: View) {
                createNotification(txtTitle.text.toString(), txtBody.text.toString())
            }
        })
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val name = "bachproef"
            val descriptionText = "bachproef notificaties"
            val importance = NotificationManager.IMPORTANCE_HIGH
            val channel = NotificationChannel(CHANNEL_ID, name, importance).apply {
                description = descriptionText
            }
            // Register the channel with the system
            val notificationManager: NotificationManager =
                getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            notificationManager.createNotificationChannel(channel)
        }
    }

    private fun createNotification(title: String, body: String) {
        val myTrace = FirebasePerformance.getInstance().newTrace("noti_create")

        myTrace.start()

        try {
            val builder = NotificationCompat.Builder(this, CHANNEL_ID)
                .setSmallIcon(R.drawable.ic_launcher_foreground)
                .setContentTitle(title)
                .setContentText(body)
                .setPriority(NotificationCompat.PRIORITY_DEFAULT)

            val notificationManager: NotificationManager =
                getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            notificationManager.notify(notificationId, builder.build())
        } finally {
            myTrace.stop()
        }
    }
}