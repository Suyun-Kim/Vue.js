export const dateFormat = {
  data() {
    return {
      mixinData: "믹스인"
    };
  },
  methods: {
    getDateAndTime(date) {
      let week = ["일", "월", "화", "수", "목", "금", "토"];

      if (date !== null) {
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let fullDate = `${date.getFullYear()}.${date.getMonth() +
          1}.${date.getDate()} (${week[date.getDay()]})`;

        return `${fullDate} · ${hour}:${minutes}:${seconds}`;
      } else {
        return null;
      }
    }
  }
};
