export const schedules = {
    dawon: {
        id: 'dawon',
        name: "다원",
        color: "#7C96F8", // Soft Blue
        days: {
            mon: [
                { title: "독서", start: "10:30", end: "11:30", location: "집" },
                { title: "도서관", start: "13:00", end: "16:30", location: "도서관", note: "1:00-4:30" },
                { title: "숙제", start: "14:00", end: "14:30", location: "도서관", type: "sub-task" },
                { title: "독서", start: "14:30", end: "15:00", location: "도서관", type: "sub-task" },
                { title: "이자경수학", start: "17:30", end: "19:30", location: "학원", note: "5:30-7:30" },
            ],
            tue: [
                { title: "독서", start: "10:30", end: "11:30", location: "집" },
                { title: "수영", start: "16:00", end: "17:00", location: "수영장", note: "4:00-5:00" },
                { title: "영어", start: "18:10", end: "20:50", location: "학원", note: "6:10-8:50" }
            ],
            wed: [
                { title: "독서", start: "10:30", end: "11:30", location: "집" },
                { title: "도서관", start: "13:00", end: "16:30", location: "도서관", note: "1:00-4:30" },
                { title: "이자경수학", start: "17:30", end: "19:30", location: "학원", note: "5:30-7:30" },
            ],
            thu: [
                { title: "독서", start: "10:30", end: "11:30", location: "집" },
                { title: "미술", start: "14:00", end: "15:30", location: "미술학원", note: "2:00-3:30" },
                { title: "수영", start: "16:00", end: "17:00", location: "수영장", note: "4:00-5:00" },
            ],
            fri: [
                { title: "독서", start: "10:30", end: "11:30", location: "집" },
                { title: "도서관", start: "13:00", end: "16:30", location: "도서관", note: "1:00-4:30" },
                { title: "기타", start: "16:20", end: "17:10", location: "학원", note: "4:20-5:10" },
                { title: "이자경수학", start: "17:30", end: "19:30", location: "학원", note: "5:30-7:30" },
            ],
            sat: [],
            sun: [
                { title: "영어", start: "17:00", end: "19:00", location: "학원", note: "5:00-7:00" }
            ]
        }
    },
    sechan: {
        id: 'sechan',
        name: "세찬",
        color: "#6BC89C", // Soft Green
        days: {
            mon: [
                { title: "독서", start: "10:30", end: "11:30", location: "집" },
                { title: "해법수학", start: "13:00", end: "14:20", location: "학원", note: "1:00-2:20" },
                { title: "영어학원", start: "15:30", end: "18:00", location: "학원", note: "3:30-6:00" },
                { title: "드럼", start: "18:30", end: "19:00", location: "학원", note: "6:30-7:00" },
                { title: "눈높이", start: "19:30", end: "20:00", location: "집" },
            ],
            tue: [
                { title: "독서", start: "10:30", end: "11:30", location: "집" },
                { title: "태권도", start: "13:00", end: "14:00", location: "도장", note: "1:00-2:00" },
                { title: "해법수학", start: "16:00", end: "17:20", location: "학원", note: "4:00-5:20" },
            ],
            wed: [
                { title: "독서", start: "10:30", end: "11:30", location: "집" },
                { title: "태권도", start: "13:00", end: "14:00", location: "도장", note: "1:00-2:00" },
                { title: "해법수학", start: "16:00", end: "17:20", location: "학원", note: "4:00-5:20" },
                { title: "드럼", start: "18:30", end: "19:00", location: "학원", note: "6:30-7:00" },
            ],
            thu: [
                { title: "독서", start: "10:30", end: "11:30", location: "집" },
                { title: "태권도", start: "13:00", end: "14:00", location: "도장", note: "1:00-2:00" },
                { title: "해법수학", start: "16:00", end: "17:20", location: "학원", note: "4:00-5:20" },
            ],
            fri: [
                { title: "독서", start: "10:30", end: "11:30", location: "집" },
                { title: "태권도", start: "13:00", end: "14:00", location: "도장", note: "1:00-2:00" },
                { title: "영어학원", start: "15:30", end: "18:00", location: "학원", note: "3:30-6:00" },
                { title: "드럼", start: "18:30", end: "19:00", location: "학원", note: "6:30-7:00" },
            ],
            sat: [
                { title: "필즈수학", start: "12:00", end: "14:50", location: "학원", note: "12:00-2:50" }
            ],
            sun: []
        }
    }
};
