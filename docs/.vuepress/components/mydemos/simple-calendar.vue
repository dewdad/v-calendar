<template>
  <div class="section">
    <h2 class="h2">Simple Calendars</h2>
    <p class="text-lg font-medium text-gray-600 mb-6">
      Show highlights, dots, bars and even custom popovers
    </p>
    <div class="flex flex-col items-center md:flex-row md:justify-around">
      <div class="mb-6">
        <h3 class="text-base semibold text-gray-700 mb-3">Popovers</h3>
        <v-date-picker v-model="date" is-inline :attributes="popovers" :available-dates="todoDates">
          <div
            slot="day-popover"
            slot-scope="{ day, format, masks, attributes, updateLayout }"
          >
            <!--Day Header-->
            <span class="text-xs text-gray-3 font-semibold">{{
              format(day.date, masks.dayPopover)
            }}</span>
            <!--Todo Rows-->
            <v-popover-row
              v-for="{
                key,
                customData,
                highlight,
                dot,
                bar,
              } in attributes.filter(a => a.customData)"
              :key="key"
              :attribute="{ highlight, dot, bar }"
            >
              <div class="flex flex-no-wrap items-center w-full">
                <!--Todo content-->
                <div class="flex-grow text-left">
                  <!--Show textbox when editing todo-->
                  <input
                    v-if="customData.id === editId"
                    class="appearance-none bg-white border px-1 text-black"
                    :style="{ minWidth: '180px' }"
                    v-model="customData.description"
                    @keyup.enter="editId = 0"
                    v-focus-select
                  />
                  <!--Show status/description when not editing-->
                  <span class="flex items-center" v-else>
                    <!--Completed checkbox-->
                    <input type="checkbox" v-model="customData.isComplete" />
                    <!--Description-->
                    <span
                      class="ml-2 cursor-pointer"
                      :class="{ 'line-through': customData.isComplete }"
                      @click="toggleTodoComplete(customData)"
                      >{{ customData.description }}</span
                    >
                  </span>
                </div>
                <!--Edit/Done buttons-->
                <a
                  @click.prevent="toggleTodoEdit(customData, updateLayout)"
                  class="ml-2 cursor-pointer"
                >
                  <!--Edit button-->
                  <svg
                    v-if="editId !== customData.id"
                    class="fill-current text-blue-300"
                    viewBox="0 0 20 20"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"
                    ></path>
                  </svg>
                  <!--Done button-->
                  <svg
                    v-else
                    class="fill-current text-green-300"
                    viewBox="0 0 20 20"
                    width="12"
                    height="12"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                  </svg>
                </a>
                <!--Delete button-->
                <a
                  @click.prevent="deleteTodo(customData, updateLayout)"
                  v-if="!editId || editId !== customData.id"
                  class="ml-1 cursor-pointer"
                >
                  <svg
                    class="fill-current text-red-300"
                    viewBox="0 0 20 20"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                    ></path>
                  </svg>
                </a>
              </div>
            </v-popover-row>
            <!--Add Todo Row-->
            <a
              @click="addTodo(day)"
              class="block text-center text-green-200 hover:text-green-300 font-semibold cursor-pointer px-1 mt-1"
              >+ Add Todo</a
            >
          </div>
        </v-date-picker>
      </div>
      <div class="mb-6">
        <h3 class="text-base semibold text-gray-700 mb-3">Meetings Calendar</h3>
        <v-date-picker ref="meetingCal"
            is-inline style="width: auto"
            v-model="date" :attributes="attrsMeeting" :available-dates="meetingDates"
            @update:topage="loadCalendarMeetings"
          >
            <div
              slot="day-popover"
              slot-scope="{ day, format, masks, attributes, updateLayout }"
            >
              <!--Day Header-->
              <span class="text-xs text-gray-3 font-semibold">{{
                format(day.date, masks.dayPopover)
              }}</span>
            </div>
          </v-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
var faker = require('faker');
const { pageForThisMonth, pageForNextMonth } = require('@/utils/helpers');
let { month: thisMonth, year: thisMonthYear } = pageForThisMonth();
let { month: nextMonth, year: nextMonthYear } = pageForNextMonth(
  thisMonth,
  thisMonthYear,
);
thisMonth--;
nextMonth--;

export default {
  data() {
    return {
      calendarMeetings: [],
      // poduces result like this: [{"count":1,"date":"2019-07-11T06:33:14.192Z"},{"count":1,"date":"2019-08-02T17:58:30.068Z"},{"count":2,"date":"2019-08-01T21:41:28.362Z"},{"count":1,"date":"2019-07-31T06:03:56.681Z"},{"count":3,"date":"2019-07-11T22:08:02.942Z"},{"count":1,"date":"2019-07-27T08:04:40.611Z"},{"count":1,"date":"2019-06-04T20:19:18.179Z"},{"count":1,"date":"2019-06-16T14:44:35.536Z"},{"count":4,"date":"2019-05-30T20:02:52.421Z"},{"count":3,"date":"2019-06-17T11:13:41.814Z"}]
      incId: 5,
      editId: 0,
      todos: [
        {
          id: 1,
          description: 'Take Noah to basketball practice.',
          isComplete: false,
          dates: new Date(thisMonthYear, thisMonth, 1),
          color: 'blue',
        },
        {
          id: 2,
          description: 'Get some milks.',
          isComplete: false,
          dates: new Date(thisMonthYear, thisMonth, 5),
          color: 'red',
        },
        {
          id: 3,
          description: 'Pay the utility bill.',
          isComplete: false,
          dates: new Date(thisMonthYear, thisMonth, 19),
          color: 'orange',
        },
        {
          id: 4,
          description: 'Pick up clothes from the cleaners.',
          isComplete: false,
          dates: new Date(thisMonthYear, thisMonth, 19),
          color: 'purple',
        },
        {
          id: 5,
          description: 'Lunch with Leo.',
          isComplete: false,
          dates: new Date(thisMonthYear, thisMonth, 22),
          color: 'green',
        },
      ],
      date: new Date(),
    };
  },
  computed: {
    attrsMeeting() {
      console.log('recomputing calendar attributes')
      return this.calendarMeetings.map(meetingsDay => ({
        // key: todo.id,
        dates: meetingsDay.date, // new Date(meetingsDay.date),
        // customData: meetingsDay['meetingMetaData'],
        // order: todo.id,
        dot: 'blue' /* {
          color: todo.color,
          class: todo.isComplete ? 'opacity-25' : '',
        } */,
        popover: {
          visibility: 'hover',
        }
      }));
    },
    meetingDates() {
      console.log('recomputing available dates');
      return this.calendarMeetings.length? Array.from(new Set(this.calendarMeetings.map(m => m.date.substring(0,10) + 'T10:00:00.000Z' )))/* .map(e => {let date = new Date(e); date.setHours(0,0,0,0); return date;}) */: [];
    },
    todoDates() {
      return this.todos.map(todo => todo.dates);
    },
    popovers() {
      return [
        // Todo attributes
        ...this.todos.map(todo => ({
          key: todo.id,
          dates: todo.dates,
          customData: todo,
          order: todo.id,
          dot: 'blue' /* {
            color: todo.color,
            class: todo.isComplete ? 'opacity-25' : '',
          } */,
          popover: {
            visibility: 'hover',
          },
        })),
        // 'Add todo' attribute
        {
          key: 'add-todo',
          dates: {},
          popover: true,
        },
      ];
    },
  },
  methods: {
    loadCalendarMeetings(){
        // if I call initCalendarMeetings() here the calendar will show an inconsistant
    },
    initCalendarMeetings(){
      this.calendarMeetings = (length => Array.from({length},()=>({
        date: faker.unique(faker.date.future,[.2]).toISOString(), // date in .2 years from now
        count: faker.random.number({min:1, max:6})
      })))(10);
    },
    addTodo(day) {
      this.editId = ++this.incId;
      this.todos.push({
        id: this.editId,
        description: 'New todo',
        isComplete: false,
        dates: day.date,
      });
    },
    toggleTodoComplete(todo) {
      todo.isComplete = !todo.isComplete;
    },
    toggleTodoEdit(todo, updateLayout) {
      this.editId = this.editId === todo.id ? 0 : todo.id;
      updateLayout();
    },
    deleteTodo(todo, updateLayout) {
      this.todos = this.todos.filter(t => t !== todo);
      // updateLayout();
    },
  },
  mounted(){
    window.myDemos = this;
    this.initCalendarMeetings()
  },
  directives: {
    focusSelect: {
      inserted(el) {
        el.focus();
        el.select();
      },
    },
  },
};
</script>
