<template>
  <v-card
    class="content-bg card mx-auto"
    :max-width="card.maxWidth"
    flat
    tile
    router
    :to="`/watch/${video.id}`"
  >
    <v-img
      :src="
        `${
          video.thumbnail
            ? video.thumbnail
            : 'https://getuikit.com/v2/docs/images/placeholder_600x400.svg'
        }`
      "
    ></v-img>
    <v-row no-gutters>
      <v-col cols="2" v-if="card.type != 'noAvatar'">
        <!-- <v-list-item class="pl-0 pt-3" router :to="`/channels/${channel._id}`"> -->
        <v-list-item class="pl-0 pt-3">
          <v-list-item-avatar>
            <v-img
              class="elevation-6"
              :src="
                `https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg`
              "
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-col>
      <v-col>
        <v-card-title
          class="pl-2 pt-3 subtitle-1 font-weight-bold"
          style="line-height: 1.2rem"
        >
          {{ video.title }}
        </v-card-title>

        <v-card-subtitle class="pl-2 pb-0">
          {{ "user " + " " }}
        </v-card-subtitle>
        <v-card-subtitle class="pl-2 pt-0">
          {{ video.views }} views<v-icon>mdi-circle-small</v-icon
          >{{ dateFormatter(video.created_at) }}
        </v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import moment from "moment";
export default {
  name: "VideoCard",
  props: {
    video: {
      type: Object,
      required: true,
    },
    card: Object,
  },

  // data() {
  //   return {
  //     url: process.env.VUE_APP_URL,
  //   };
  // },
  methods: {
    dateFormatter(date) {
      return moment(date).fromNow();
    },
  },
};
</script>

<style></style>
