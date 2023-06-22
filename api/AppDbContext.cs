using Microsoft.EntityFrameworkCore;
using api.Models;

namespace app.ContextDb;

public class AppDbContext : DbContext
{

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<BookCategory>()
        .HasKey(bc => bc.BookId);

        modelBuilder.Entity<BookCategory>()
        .HasOne(bc => bc.Books)
        .WithMany(b => b.BookCategories)
        .HasForeignKey(bc => bc.BookId);
    
        modelBuilder.Entity<BookCategory>()
        .HasOne(bc => bc.Categories)
        .WithMany(c => c.BookCategories)
        .HasForeignKey(bc => bc.CategoryId);
    }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Books> Book { get; set; }
    public DbSet<Categories> Category { get; set; }
    public DbSet<BookCategory> BookCategories { get; set; }

    // protected override void OnConfiguring(DbContextOptionsBuilder options)
    //     => options.UseSqlite(@"C:/Temp/MBL.db");
}
