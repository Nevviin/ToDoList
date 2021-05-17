using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Api.Models
{
    public class ToDo
    {
        public int Id { get; set; }
        public string Item { get; set; }
        public bool IsCompleted { get; set; }

        public DateTime CreatedDate { get; set; }

    }
}
