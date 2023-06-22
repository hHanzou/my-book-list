namespace webapi.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string? BookName { get; set; }
        public ICollection<BookCategory>? BookCategories { get; set; }
    }
}
