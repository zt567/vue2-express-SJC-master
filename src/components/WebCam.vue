<template>
  <div>
    <code v-if="device">當前相機:{{ device.label }}</code>
    <code v-if="!device">未偵測到相機</code>
    <vue-web-cam
      ref="webcam"
      :device-id="deviceId"
      width="30%"
      @started="onStarted"
      @stopped="onStopped"
      @error="onError"
      @cameras="onCameras"
      @camera-change="onCameraChange"
    />
    <select v-model="camera">
      <option>-- Select Device --</option>
      <option
        v-for="device in devices"
        :key="device.deviceId"
        :value="device.deviceId"
      >
        {{ device.label }}
      </option>
    </select>
    <button type="button" class="" @click="onCapture">
      Capture Photo
    </button>
    <button type="button" class="" @click="onStop">
      Stop Camera
    </button>
    <button type="button" class="" @click="onStart">
      Start Camera
    </button>
    <figure class="figure">
      <img :src="img" class="img-responsive" width="300px" />
    </figure>
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
