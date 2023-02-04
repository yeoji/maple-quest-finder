import Quests_1_10 from '../../data/quests_1_10.json';
import Quests_11_20 from '../../data/quests_11_20.json';
import Quests_21_30 from '../../data/quests_21_30.json';
import Quests_31_40 from '../../data/quests_31_40.json';
import Quests_41_50 from '../../data/quests_41_50.json';
import Quests_51_65 from '../../data/quests_51_65.json';
import Quests_66_200 from '../../data/quests_66_200.json';

export function getQuests() {
  return Quests_1_10.concat(Quests_11_20, Quests_21_30, Quests_31_40, Quests_41_50, Quests_51_65, Quests_66_200);
}