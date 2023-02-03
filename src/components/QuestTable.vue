<template>
  <v-card>
    <v-card-title>
      <v-container>
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="4"
          >
            <v-select
              @update:model-value="onFilterLocation"
              label="Location"
              :items="locationsList"
              variant="solo"
            ></v-select>
          </v-col>
          <v-col
            cols="12"
            sm="4"
          >
            <v-select
              label="Level Range"
              :items="levelRangeList"
              variant="solo"
            ></v-select>
          </v-col>
          <v-col
            cols="12"
            sm="4"
          >
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-title>
    <v-data-table
      v-model:items-per-page="itemsPerPage"
      v-model:expanded="expanded"
      :headers="headers"
      :items="quests"
      :search="search"
      item-value="name"
      show-expand
      class="elevation-1"
    ></v-data-table>
  </v-card>
</template>

<script>
import Quests_1_10 from '../../data/quests_1_10.json';
import Quests_11_20 from '../../data/quests_11_20.json';
import Quests_21_30 from '../../data/quests_21_30.json';
import Quests_31_40 from '../../data/quests_31_40.json';
import Quests_41_50 from '../../data/quests_41_50.json';
import Quests_51_65 from '../../data/quests_51_65.json';
import Quests_66_200 from '../../data/quests_66_200.json';

const QUESTS_ALL = transformToTableFormat(
  Quests_1_10.concat(Quests_11_20, Quests_21_30, Quests_31_40, Quests_41_50, Quests_51_65, Quests_66_200)
)

function transformToTableFormat(quests) {
  return quests.flatMap(quest => {
    quest.chain.forEach(chain => {
      chain.level = quest.level;
      chain.location = quest.location;
    });

    return quest.chain;
  })
}

export default {
  data () {
    return {
      locationsList: [...new Set(QUESTS_ALL.map(quest => quest.location))],
      levelRangeList: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-65', '66-200'],
      search: '',
      itemsPerPage: 10,
      headers: [
        {
          title: 'Location',
          align: 'start',
          key: 'location',
        },
        { title: 'Name', align: 'end', key: 'name' },
        { title: 'Level', align: 'end', key: 'level' },
        { title: 'NPC', align: 'end', key: 'npc' },
        { title: 'NPC Location', align: 'end', key: 'npcLocation' },
        { title: 'EXP', align: 'end', key: 'exp' },
      ],
      quests: QUESTS_ALL,
      expanded: [],
    }
  },
  methods: {
    onFilterLocation(value) {
      this.quests = QUESTS_ALL.filter(quest => quest.location === value)
    }
  }
}
</script>

<style scoped>
</style>
