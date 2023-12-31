﻿using Microsoft.EntityFrameworkCore;
using webapi.Models;
using System.Collections.Generic;
using System.Reflection.Emit;

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

    public DbSet<Book>? Book { get; set; }
    public DbSet<Category>? Category { get; set; }
    public DbSet<BookCategory>? BookCategories { get; set; }

    // protected override void OnConfiguring(DbContextOptionsBuilder options)
    //     => options.UseSqlite(@"C:/Temp/MBL.db");
}