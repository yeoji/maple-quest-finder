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
              v-model="location"
              label="Location"
              :items="locationsList"
              clearable=true
              class="ma-2 pa-2"
            ></v-select>
          </v-col>
          <v-col
            cols="12"
            sm="4"
          >
            <v-select
              @update:model-value="onFilterLevelRange"
              v-model="levelRange"
              label="Level Range"
              :items="levelRangeList"
              clearable=true
              class="ma-2 pa-2"
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
              class="ma-2 pa-2"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-title>
    <v-data-table
      v-model:items-per-page="itemsPerPage"
      v-model:expanded="expanded"
      :custom-filter="customSearch"
      :headers="headers"
      :items="quests"
      :search="search"
      item-value="name"
      show-expand
      class="elevation-1"
    >
      <template v-slot:item.itemsNeeded="{ item }">
        <v-list lines="one">
          <v-list-item
            v-for="itemNeeded in item.raw.itemsNeeded"
            :key="itemNeeded"
            :title="itemNeeded.qty + 'x ' + itemNeeded.name"
          ></v-list-item>
        </v-list>
      </template>
      <template v-slot:expanded-row="{ columns, item }">
        <tr class="quest-details">
          <td :colspan="columns.length">
            <strong>Procedure:</strong>
            <v-list lines="one">
              <v-list-item
                v-for="(procedure, index) in item.raw.procedures"
                :key="procedure"
                :title="(index + 1) + '. ' + procedure"
              ></v-list-item>
            </v-list>
          </td>
        </tr>
        <tr class="quest-details" v-if="item.raw.rewards.length > 0">
          <td :colspan="columns.length">
            <strong>Potential Reward(s):</strong>
            <v-list lines="one">
              <v-list-item
                v-for="reward in item.raw.rewards"
                :key="reward"
                :title="reward"
              ></v-list-item>
            </v-list>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import {getQuests} from '../data/quests';

const QUESTS_ALL = transformToTableFormat(getQuests())

function transformToTableFormat(quests) {
  return quests.flatMap(quest => {
    quest.chain.forEach(chain => {
      const splitLevelQuestChainMatch = chain.name.match(/(.*) \(Level (\d+) and above\)/);
      if(splitLevelQuestChainMatch != null) {
        chain.level = splitLevelQuestChainMatch[2]
        chain.name = splitLevelQuestChainMatch[1]
      } else {
        chain.level = quest.level;
      }
      chain.location = quest.location;
      chain.exp = chain.exp * 3
    });

    return quest.chain;
  })
}

export default {
  data () {
    return {
      location: '',
      levelRange: '',
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
        { title: 'Item(s) Needed', align: 'end', key: 'itemsNeeded', sortable: false },
        { title: 'Procedure', align: ' d-none', key: 'procedures', sortable: false },
      ],
      quests: QUESTS_ALL,
      expanded: [],
    }
  },
  methods: {
    onFilterLocation(value) {
      this.location = value
      this.onFilterChange()
    },
    onFilterLevelRange(value) {
      this.levelRange = value
      this.onFilterChange()
    },
    onFilterChange() {
      const startRange = this.levelRange && this.levelRange.split('-')[0]
      const endRange = this.levelRange && this.levelRange.split('-')[1]

      this.quests = QUESTS_ALL.filter(quest => {
        const locationFilter = !this.location || (quest.location === this.location)
        const levelRangeFilter = !this.levelRange || (quest.level >= startRange && quest.level <= endRange)

        return locationFilter && levelRangeFilter
      })
    },
    customSearch(_, search, item) {
      const searchValue = (value) => {
        return value && value.toString().toLowerCase().includes(search.toLowerCase());
      }

      const checkObject = (obj) => {
        return Object.values(obj).some(value => {
          return typeof value === 'object' ? checkObject(value) : searchValue(value);
        });
      }

      // why 6? no idea
      return checkObject(Object.values(item)[6]);
    },
  },
}
</script>

<style scoped>
.quest-details {
  text-align: center;
}
</style>
