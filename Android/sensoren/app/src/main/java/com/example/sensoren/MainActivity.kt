package com.example.sensoren

import android.content.Context
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import com.google.firebase.perf.FirebasePerformance

class MainActivity : AppCompatActivity() {
    private lateinit var sensorManager: SensorManager
    private var accelerometer: Sensor? = null
    private var gyroscope: Sensor? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val txtAccelerometer = findViewById<TextView>(R.id.txtAccelerometer)
        val txtGyroscoop = findViewById<TextView>(R.id.txtGyroscoop)
        val btnAccelerometer = findViewById<Button>(R.id.btnGetAccelerometer)
        val btnGyroscoop = findViewById<Button>(R.id.btnGetGyroscoop)

        sensorManager = getSystemService(Context.SENSOR_SERVICE) as SensorManager
        accelerometer = sensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER)
        gyroscope = sensorManager.getDefaultSensor(Sensor.TYPE_GYROSCOPE)

        val sensorEventListener = object : SensorEventListener {
            override fun onSensorChanged(event: SensorEvent) {
                val myTrace = FirebasePerformance.getInstance().newTrace("getDataGyroscoop")

                myTrace.start()
                try {
                    if (event.sensor.type == Sensor.TYPE_ACCELEROMETER) {
                        val x = event.values[0]
                        val y = event.values[1]
                        val z = event.values[2]

                        runOnUiThread{
                            txtAccelerometer.text = "x=$x, y=$y, z=$z"
                        }
                    } else if (event.sensor.type == Sensor.TYPE_GYROSCOPE) {
                        val x = event.values[0]
                        val y = event.values[1]
                        val z = event.values[2]

                        runOnUiThread{
                            txtGyroscoop.text = "x=$x, y=$y, z=$z"
                        }
                    }
                } finally {
                    myTrace.stop()
                }

            }

            override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {
                return
            }
        }

        btnAccelerometer.setOnClickListener {
            sensorManager.registerListener(
                sensorEventListener,
                accelerometer,
                SensorManager.SENSOR_DELAY_NORMAL
            )
        }

        btnGyroscoop.setOnClickListener {
            sensorManager.registerListener(
                sensorEventListener,
                gyroscope,
                SensorManager.SENSOR_DELAY_NORMAL
            )
        }
    }
}