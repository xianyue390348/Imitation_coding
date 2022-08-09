import { configure, observable } from "mobx";

class AppStore {
  @observable monthList = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  constructor() {
    configure({ enforceActions: "always" });
  }
}

export default new AppStore();
