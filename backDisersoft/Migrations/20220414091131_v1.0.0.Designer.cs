﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backDisersoft;

namespace backDisersoft.Migrations
{
    [DbContext(typeof(AplicationDbContext))]
    [Migration("20220414091131_v1.0.0")]
    partial class v100
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.16");

            modelBuilder.Entity("backDisersoft.Models.Preventico", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("comment")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTime>("endDate")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("images")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<float>("kilometers")
                        .HasColumnType("float");

                    b.Property<string>("name_tec")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("num_bus")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("num_ticket")
                        .HasColumnType("int");

                    b.Property<DateTime>("startDate")
                        .HasColumnType("datetime(6)");

                    b.HasKey("Id");

                    b.ToTable("Preventico");
                });
#pragma warning restore 612, 618
        }
    }
}
