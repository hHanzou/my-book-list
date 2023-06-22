using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Models
{
    public class BookCategory
    {
        public int Id {get; set;}
        public int? BookId {get; set;}
        public int? CategoryId {get; set;}

        public Books? Books {get; set;}
        public Categories? Categories {get; set;}
    }
}