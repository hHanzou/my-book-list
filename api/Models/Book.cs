using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Books
    {
        public int Id { get; set; }
        public string? BookName { get; set; }
        public ICollection<BookCategory>? BookCategories {get; set;}
    }
}