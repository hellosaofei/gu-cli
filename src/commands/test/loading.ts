import { Load } from "@/utils/loading";

const loading = new Load();

export default function () {
  loading.start({
    color: "green",
    text: "begin",
  });
  setTimeout(() => {
    loading.stop();
    console.log("loading效果展示完毕");
  }, 3000);
}
