﻿// <auto-generated />
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace API.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.0-rc.2.20475.6");

            modelBuilder.Entity("API.Entities.MtoEntry", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<long>("BaseWeight")
                        .HasColumnType("INTEGER");

                    b.Property<string>("CostElement")
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<long>("Diameter")
                        .HasColumnType("INTEGER");

                    b.Property<string>("DwgCode")
                        .HasColumnType("TEXT");

                    b.Property<string>("DwgNo")
                        .HasColumnType("TEXT");

                    b.Property<string>("MatGroup")
                        .HasColumnType("TEXT");

                    b.Property<string>("MatType")
                        .HasColumnType("TEXT");

                    b.Property<string>("MatVariant")
                        .HasColumnType("TEXT");

                    b.Property<long>("Nal")
                        .HasColumnType("INTEGER");

                    b.Property<string>("PlatNo")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProcMethod")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProjName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Section")
                        .HasColumnType("TEXT");

                    b.Property<string>("SubCostElement")
                        .HasColumnType("TEXT");

                    b.Property<long>("SurfaceArea")
                        .HasColumnType("INTEGER");

                    b.Property<long>("Thickness")
                        .HasColumnType("INTEGER");

                    b.Property<long>("UnitWeight")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Entries");
                });

            modelBuilder.Entity("API.Entities.MtoUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("UserName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
