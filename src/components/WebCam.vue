<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6">
        <div class="camara-select">
          <code v-if="!device">未偵測到相機</code>
          <el-select v-model="camera">
            <option>-選擇鏡頭-</option>
            <option
              v-for="device in devices"
              :key="device.deviceId"
              :value="device.deviceId"
            >
              {{ device.label }}
            </option>
          </el-select>
        </div>
        <el-button type="primary" @click="onCapture" circle
          ><i class="el-icon-camera-solid"></i>
        </el-button>
      </el-col>
      <el-col :span="6">
        <div class="outer">
          <vue-web-cam
            ref="webcam"
            :device-id="deviceId"
            @started="onStarted"
            @stopped="onStopped"
            @error="onError"
            @cameras="onCameras"
            @camera-change="onCameraChange"
          />
        </div>
      </el-col>
      <el-col :span="6">
        <figure class="figure">
          <img :src="img" class="img-responsive" />
        </figure>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { WebCam } from "vue-web-cam";
export default {
  name: "WebCam",
  components: {
    WebCam: WebCam,
  },
  data() {
    return {
      img: null,
      camera: null,
      deviceId: null,
      devices: [],
    };
  },
  computed: {
    device: function () {
      return this.devices.find((n) => n.deviceId === this.deviceId);
    },
  },
  watch: {
    camera: function (id) {
      this.deviceId = id;
    },
    devices: function () {
      // Once we have a list select the first one
      const [first, ...tail] = this.devices;
      if (first) {
        this.camera = first.deviceId;
        this.deviceId = first.deviceId;
      }
    },
  },
  methods: {
    onCapture() {
      this.img = this.$refs.webcam.capture();
    },
    onStarted(stream) {
      console.log("On Started Event", stream);
    },
    onStopped(stream) {
      console.log("On Stopped Event", stream);
    },
    onStop() {
      this.$refs.webcam.stop();
    },
    onStart() {
      this.$refs.webcam.start();
    },
    onError(error) {
      console.log("On Error Event", error);
    },
    onCameras(cameras) {
      this.devices = cameras;
      console.log("On Cameras Event", cameras);
    },
    onCameraChange(deviceId) {
      this.deviceId = deviceId;
      this.camera = deviceId;
      console.log("On Camera Change Event", deviceId);
    },
  },
};
</script>

<style>
.outer{
  width: 250px;
  height: 250px;
}
.camara-select {
  margin-top: 50px;
  margin-left: 50px;
}
.el-button {
  margin-top: 70px;
  margin-left: 42%;
  font-size: 50px;
}
video {
  margin-top: -30px;
  border-radius: 20px;
  width: 300px;
  height: 300px;
}
.img-responsive {
  width: 250px;
  margin-left: -38px;
  border-radius: 20px;
}
</style>