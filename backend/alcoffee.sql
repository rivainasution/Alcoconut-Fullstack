-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Sep 2022 pada 17.58
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alcoffee`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description1` varchar(255) DEFAULT NULL,
  `description2` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `about`
--

INSERT INTO `about` (`id`, `title`, `description1`, `description2`, `createdAt`, `updatedAt`) VALUES
(1, 'PT. Kharisma Timur Indonesia is a new company that was established on December 23, 2021.', 'This company is engaged in exports, especially exports of processed products from local coffee originating from North Sumatra which are worldwide, namely Mandheling coffee and Sipirok coffee. Our company has distributed processed coffee products to variou', 'We prioritize natural quality with traditional processing to maintain its taste. Now, we produce processed coffee products with a quantity of 100 kg/week and we continue to strive to increase our production base without compromising on quality with the ho', '2022-09-23 15:07:59', '2022-09-23 15:07:59');

-- --------------------------------------------------------

--
-- Struktur dari tabel `aboutproduct`
--

CREATE TABLE `aboutproduct` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `aboutproduct`
--

INSERT INTO `aboutproduct` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Mandheling Coffee', 'Mandheling coffee is Arabica coffee originating from the Mandailing area, Bukit Barisan Mountains, North Sumatra. This coffee has a good thick taste, medium acidity, floral taste with a sweet finish. In William H. Ukers\' book (New York, 1922), mandailing ', '2022-09-23 15:27:36', '2022-09-23 15:27:36'),
(2, 'Sipirok Coffee', 'Sipirok coffee is coffee that thrives in Sipirok, North Sumatra. The texture is not thick and quite soft. Sipirok Arabica coffee beans are classified as specialty coffee because they have a unique taste which is a mixture of lemon tea, spices and palm sug', '2022-09-23 15:28:02', '2022-09-23 15:28:02');

-- --------------------------------------------------------

--
-- Struktur dari tabel `about_album`
--

CREATE TABLE `about_album` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `about_album`
--

INSERT INTO `about_album` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'about 1', 'ed2de132d8a1b10fdea0006cc26a913b.jpg', 'http://localhost:5000/aboutalbum/ed2de132d8a1b10fdea0006cc26a913b.jpg', '2022-09-23 15:19:56', '2022-09-23 15:19:56'),
(2, 'about 2', '15b205a7e1d6563093c4d35b8452703a.jpg', 'http://localhost:5000/aboutalbum/15b205a7e1d6563093c4d35b8452703a.jpg', '2022-09-23 15:20:10', '2022-09-23 15:20:10'),
(3, 'about 3', 'cc4ebae297feb5171b146b03dadf23b4.jpg', 'http://localhost:5000/aboutalbum/cc4ebae297feb5171b146b03dadf23b4.jpg', '2022-09-23 15:20:23', '2022-09-23 15:20:23'),
(4, 'about 4', 'bfa52aa3509d4f591920a61d8743a3af.jpg', 'http://localhost:5000/aboutalbum/bfa52aa3509d4f591920a61d8743a3af.jpg', '2022-09-23 15:20:32', '2022-09-23 15:20:32');

-- --------------------------------------------------------

--
-- Struktur dari tabel `coffeepowderm`
--

CREATE TABLE `coffeepowderm` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `coffeepowderm`
--

INSERT INTO `coffeepowderm` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'coffee powder 1', '272546931e2543cb574a0c8b6ea5befa.jpg', 'http://localhost:5000/coffeepowderm/272546931e2543cb574a0c8b6ea5befa.jpg', '2022-09-24 04:06:56', '2022-09-24 04:06:56'),
(2, 'coffee powder 2', '5f93f4d879ad1b440228a94703b728d2.jpg', 'http://localhost:5000/coffeepowderm/5f93f4d879ad1b440228a94703b728d2.jpg', '2022-09-24 04:07:08', '2022-09-24 04:07:08'),
(3, 'coffee powder 3', '4beecb535b683f47d093b01086cb99ad.jpg', 'http://localhost:5000/coffeepowderm/4beecb535b683f47d093b01086cb99ad.jpg', '2022-09-24 04:07:20', '2022-09-24 04:07:20'),
(4, 'coffee powder 4', 'ef5d1364de5c306460a128c2051a8e47.jpg', 'http://localhost:5000/coffeepowderm/ef5d1364de5c306460a128c2051a8e47.jpg', '2022-09-24 04:07:32', '2022-09-24 04:07:32');

-- --------------------------------------------------------

--
-- Struktur dari tabel `coffeepowders`
--

CREATE TABLE `coffeepowders` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `coffeepowders`
--

INSERT INTO `coffeepowders` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'coffee powder 1', '1e3c5522ec1df3787c5cdb45054cdd35.jpg', 'http://localhost:5000/coffeepowders/1e3c5522ec1df3787c5cdb45054cdd35.jpg', '2022-09-24 04:26:05', '2022-09-24 04:26:05'),
(2, 'coffee powder 2', '37dc5dbb33ea59c63198afffa38c0dff.jpg', 'http://localhost:5000/coffeepowders/37dc5dbb33ea59c63198afffa38c0dff.jpg', '2022-09-24 04:26:15', '2022-09-24 04:26:15'),
(3, 'coffee powder 3', '33be6741acb7e7c201ca7076656b0d3b.jpg', 'http://localhost:5000/coffeepowders/33be6741acb7e7c201ca7076656b0d3b.jpg', '2022-09-24 04:26:26', '2022-09-24 04:26:26');

-- --------------------------------------------------------

--
-- Struktur dari tabel `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `contact`
--

INSERT INTO `contact` (`id`, `title`, `logo`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Our Office', 'fas fa-location-dot fa-lg', 'Padangsidimpuan, Sumatera Utara, Indonesia', '2022-09-24 04:56:28', '2022-09-25 09:05:53'),
(2, 'Contact Us', 'fa fa-phone fa-lg', '+62 822 7434 8350', '2022-09-24 04:57:13', '2022-09-25 09:06:17'),
(3, 'Mail Us', 'fa fa-envelope-open fa-lg', 'customer.service@alcoconut.com', '2022-09-24 04:57:36', '2022-09-25 09:06:28'),
(4, 'Instagram', 'fab fa-instagram fa-lg', '@alcoconut_official', '2022-09-24 04:58:13', '2022-09-25 09:06:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `detailcm`
--

CREATE TABLE `detailcm` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `harga` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `csscode` varchar(255) DEFAULT NULL,
  `csstype` varchar(255) DEFAULT NULL,
  `cssharga` varchar(255) DEFAULT NULL,
  `csslocation` varchar(255) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `detailcm`
--

INSERT INTO `detailcm` (`id`, `title`, `code`, `type`, `harga`, `description`, `location`, `csscode`, `csstype`, `cssharga`, `csslocation`, `rating`, `createdAt`, `updatedAt`) VALUES
(1, 'Coffee Powder M ', 'M003', 'Mandheling', 'Rp. 180.000/kg', 'Mandheling coffee is Arabica coffee originating from the Mandailing area.', 'Mandailing Natal, Indonesia', 'fas fa-star mx-1', 'fas fa-table-cells-large mx-1', 'fas fa-tag mx-1', 'fas fa-map-marker mx-1', '5 Star', '2022-09-25 07:34:37', '2022-09-25 07:34:37');

-- --------------------------------------------------------

--
-- Struktur dari tabel `detailcs`
--

CREATE TABLE `detailcs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `harga` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `csscode` varchar(255) DEFAULT NULL,
  `csstype` varchar(255) DEFAULT NULL,
  `cssharga` varchar(255) DEFAULT NULL,
  `csslocation` varchar(255) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `detailcs`
--

INSERT INTO `detailcs` (`id`, `title`, `code`, `type`, `harga`, `description`, `location`, `csscode`, `csstype`, `cssharga`, `csslocation`, `rating`, `createdAt`, `updatedAt`) VALUES
(1, 'Coffee Powder S ', 'S003', 'Sipirok', 'Rp. 180.000/kg', 'Sipirok coffee is coffee that thrives in Sipirok, North Sumatra.', 'Tapanuli Selatan, Indonesia', 'fas fa-star mx-1', 'fas fa-table-cells-large mx-1', 'fas fa-tag mx-1', 'fas fa-map-marker mx-1', '5 Star', '2022-09-25 07:33:34', '2022-09-25 07:33:34');

-- --------------------------------------------------------

--
-- Struktur dari tabel `detailgm`
--

CREATE TABLE `detailgm` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `harga` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `csscode` varchar(255) DEFAULT NULL,
  `csstype` varchar(255) DEFAULT NULL,
  `cssharga` varchar(255) DEFAULT NULL,
  `csslocation` varchar(255) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `detailgm`
--

INSERT INTO `detailgm` (`id`, `title`, `code`, `type`, `harga`, `description`, `location`, `csscode`, `csstype`, `cssharga`, `csslocation`, `rating`, `createdAt`, `updatedAt`) VALUES
(1, 'Green Bean M ', 'M001', 'Mandheling', 'Rp. 100.000/kg', 'Mandheling coffee is Arabica coffee originating from the Mandailing area.', 'Mandailing Natal, Indonesia', 'fas fa-star mx-1', 'fas fa-table-cells-large mx-1', 'fas fa-tag mx-1', 'fas fa-map-marker mx-1', '5 Star', '2022-09-25 05:59:12', '2022-09-25 07:35:49');

-- --------------------------------------------------------

--
-- Struktur dari tabel `detailgs`
--

CREATE TABLE `detailgs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `harga` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `csscode` varchar(255) DEFAULT NULL,
  `csstype` varchar(255) DEFAULT NULL,
  `cssharga` varchar(255) DEFAULT NULL,
  `csslocation` varchar(255) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `detailgs`
--

INSERT INTO `detailgs` (`id`, `title`, `code`, `type`, `harga`, `description`, `location`, `csscode`, `csstype`, `cssharga`, `csslocation`, `rating`, `createdAt`, `updatedAt`) VALUES
(1, 'Green Bean S ', 'S001', 'Sipirok', 'Rp. 100.000/kg', 'Sipirok coffee is coffee that thrives in Sipirok, North Sumatra.', 'Tapanuli Selatan, Indonesia', 'fas fa-star mx-1', 'fas fa-table-cells-large mx-1', 'fas fa-tag mx-1', 'fas fa-map-marker mx-1', '5 Star', '2022-09-25 07:30:52', '2022-09-25 07:30:52');

-- --------------------------------------------------------

--
-- Struktur dari tabel `detailrm`
--

CREATE TABLE `detailrm` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `harga` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `csscode` varchar(255) DEFAULT NULL,
  `csstype` varchar(255) DEFAULT NULL,
  `cssharga` varchar(255) DEFAULT NULL,
  `csslocation` varchar(255) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `detailrm`
--

INSERT INTO `detailrm` (`id`, `title`, `code`, `type`, `harga`, `description`, `location`, `csscode`, `csstype`, `cssharga`, `csslocation`, `rating`, `createdAt`, `updatedAt`) VALUES
(1, 'Roast Bean M', 'M003', 'Mandheling', 'Rp. 160.000/kg', 'Mandheling coffee is Arabica coffee originating from the Mandailing area.', 'Mandailing Natal, Indonesia', 'fas fa-star mx-1', 'fas fa-table-cells-large mx-1', 'fas fa-tag mx-1', 'fas fa-map-marker mx-1', '5 Star', '2022-09-25 07:34:14', '2022-09-25 08:52:53');

-- --------------------------------------------------------

--
-- Struktur dari tabel `detailrs`
--

CREATE TABLE `detailrs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `harga` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `csscode` varchar(255) DEFAULT NULL,
  `csstype` varchar(255) DEFAULT NULL,
  `cssharga` varchar(255) DEFAULT NULL,
  `csslocation` varchar(255) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `detailrs`
--

INSERT INTO `detailrs` (`id`, `title`, `code`, `type`, `harga`, `description`, `location`, `csscode`, `csstype`, `cssharga`, `csslocation`, `rating`, `createdAt`, `updatedAt`) VALUES
(1, 'Roast Bean S ', 'S002', 'Sipirok', 'Rp. 160.000/kg', 'Sipirok coffee is coffee that thrives in Sipirok, North Sumatra.', 'Tapanuli Selatan, Indonesia', 'fas fa-star mx-1', 'fas fa-table-cells-large mx-1', 'fas fa-tag mx-1', 'fas fa-map-marker mx-1', '5 Star', '2022-09-25 07:33:09', '2022-09-25 07:33:09');

-- --------------------------------------------------------

--
-- Struktur dari tabel `greenbeanm`
--

CREATE TABLE `greenbeanm` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `greenbeanm`
--

INSERT INTO `greenbeanm` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'green bean 1', '1b727d575b74f5d35bb1fdbdef0be199.jpg', 'http://localhost:5000/greenbeanm/1b727d575b74f5d35bb1fdbdef0be199.jpg', '2022-09-24 03:45:07', '2022-09-24 03:45:07'),
(2, 'green bean 2', '8e1f80b49d24135091d5500655b504ac.jpg', 'http://localhost:5000/greenbeanm/8e1f80b49d24135091d5500655b504ac.jpg', '2022-09-24 03:45:19', '2022-09-24 03:45:19'),
(3, 'green bean 3', '4791c06db67ec9b1304d4c6ef0c72911.jpg', 'http://localhost:5000/greenbeanm/4791c06db67ec9b1304d4c6ef0c72911.jpg', '2022-09-24 03:45:28', '2022-09-24 03:45:28'),
(4, 'green bean 4', 'b2f0b3a683a309a4c8b5b31c5b410172.jpg', 'http://localhost:5000/greenbeanm/b2f0b3a683a309a4c8b5b31c5b410172.jpg', '2022-09-24 03:45:38', '2022-09-24 03:45:38');

-- --------------------------------------------------------

--
-- Struktur dari tabel `greenbeans`
--

CREATE TABLE `greenbeans` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `greenbeans`
--

INSERT INTO `greenbeans` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'green bean 1', '611845428564ef86adbcf02194dc65bc.jpg', 'http://localhost:5000/greenbeans/611845428564ef86adbcf02194dc65bc.jpg', '2022-09-24 04:21:20', '2022-09-24 04:21:20'),
(2, 'green bean 2', '115ae9537a9b978df9a87b50e7542175.jpg', 'http://localhost:5000/greenbeans/115ae9537a9b978df9a87b50e7542175.jpg', '2022-09-24 04:21:43', '2022-09-24 04:21:43'),
(3, 'green bean 3', '11fbd35874a576d2b8f5b1b21047547d.jpg', 'http://localhost:5000/greenbeans/11fbd35874a576d2b8f5b1b21047547d.jpg', '2022-09-24 04:21:53', '2022-09-24 04:21:53'),
(4, 'green bean 4', 'b03b29c8271eabed1aa6c7786f62b7c3.jpg', 'http://localhost:5000/greenbeans/b03b29c8271eabed1aa6c7786f62b7c3.jpg', '2022-09-24 04:22:03', '2022-09-24 04:22:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `location`
--

CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(500) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `location`
--

INSERT INTO `location` (`id`, `title`, `url`, `createdAt`, `updatedAt`) VALUES
(2, 'Padangsidimpuan', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127636.78412304964!2d99.215814936782!3d1.3868990141423678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302c1b8271867741%3A0x91614b30c14aac7a!2sPadang%20Sidempuan%20City%2C%20North%20Sumatra!5e0!3m2!1sen!2sid!4v1664207611561!5m2!1sen!2sid', '2022-09-24 05:12:23', '2022-09-24 05:12:23');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mandhelingcoffee`
--

CREATE TABLE `mandhelingcoffee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `mandhelingcoffee`
--

INSERT INTO `mandhelingcoffee` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'mandheling 1', 'e31bfc03f3bfe6593bbb255337caebe7.jpg', 'http://localhost:5000/mandhelingcoffealbum/e31bfc03f3bfe6593bbb255337caebe7.jpg', '2022-09-24 14:53:10', '2022-09-24 14:53:10'),
(2, 'mandheling 2', 'f89abfd3daa7e917e5a2ee31d7192e9d.jpg', 'http://localhost:5000/mandhelingcoffealbum/f89abfd3daa7e917e5a2ee31d7192e9d.jpg', '2022-09-24 14:53:21', '2022-09-24 14:53:21'),
(3, 'mandheling 3', '3ce29693914b8fa4f8df5dfe2c769eb5.jpg', 'http://localhost:5000/mandhelingcoffealbum/3ce29693914b8fa4f8df5dfe2c769eb5.jpg', '2022-09-24 14:53:31', '2022-09-24 14:53:31'),
(4, 'mandheling 4', 'fb640aedcdb251447518f541693452e5.jpg', 'http://localhost:5000/mandhelingcoffealbum/fb640aedcdb251447518f541693452e5.jpg', '2022-09-24 14:53:42', '2022-09-24 14:53:42');

-- --------------------------------------------------------

--
-- Struktur dari tabel `navbar`
--

CREATE TABLE `navbar` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `css` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `navbar`
--

INSERT INTO `navbar` (`id`, `name`, `css`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, '#services', 'item1', 'f0f1d8c0cc6b409068bab995f63f3d37.png', 'http://localhost:5000/navbar/f0f1d8c0cc6b409068bab995f63f3d37.png', '2022-09-24 13:16:41', '2022-09-25 09:23:11'),
(2, '#about', 'item2', 'bcae10cd14c2a3c84db46eb1991b6fa8.png', 'http://localhost:5000/navbar/bcae10cd14c2a3c84db46eb1991b6fa8.png', '2022-09-24 13:17:08', '2022-09-25 09:23:17'),
(3, '#teams', 'item3', 'e89246b0acf39767c2fc02b3f00ff35a.png', 'http://localhost:5000/navbar/e89246b0acf39767c2fc02b3f00ff35a.png', '2022-09-24 13:17:24', '2022-09-25 09:23:24'),
(4, '#content', 'item4', 'd0584017add08d12290b3357fb1bd1c9.png', 'http://localhost:5000/navbar/d0584017add08d12290b3357fb1bd1c9.png', '2022-09-24 13:17:41', '2022-09-25 09:23:30'),
(5, '#contact', 'item5', 'c742b7561f9c32cf987df7cff66716fd.png', 'http://localhost:5000/navbar/c742b7561f9c32cf987df7cff66716fd.png', '2022-09-24 13:17:57', '2022-09-25 09:23:37'),
(6, '#product', 'item6', '684e38c2e24090332f64e3ecade35ef1.png', 'http://localhost:5000/navbar/684e38c2e24090332f64e3ecade35ef1.png', '2022-09-24 13:18:17', '2022-09-25 09:23:43');

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `harga` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `css` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id`, `name`, `type`, `harga`, `image`, `code`, `css`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'Green Bean M', 'Mandheling', 'Rp 100.000/kg', '1b727d575b74f5d35bb1fdbdef0be199.jpg', 'M001', 'warning', 'http://localhost:5000/product/1b727d575b74f5d35bb1fdbdef0be199.jpg', '2022-09-25 08:00:42', '2022-09-25 08:00:42'),
(2, 'Roast Bean M', 'Mandheling', 'Rp 160.000/kg', '05083b7a7bcd4ef884c3e9287561a38c.jpg', 'M002', 'warning', 'http://localhost:5000/product/05083b7a7bcd4ef884c3e9287561a38c.jpg', '2022-09-25 08:01:22', '2022-09-25 08:01:22'),
(3, 'Coffee Powder M', 'Mandheling', 'Rp 180.000/kg', '272546931e2543cb574a0c8b6ea5befa.jpg', 'M003', 'warning', 'http://localhost:5000/product/272546931e2543cb574a0c8b6ea5befa.jpg', '2022-09-25 08:01:51', '2022-09-25 08:01:51'),
(4, 'Green Bean S', 'Sipirok', 'Rp 100.000/kg', '611845428564ef86adbcf02194dc65bc.jpg', 'S001', 'danger', 'http://localhost:5000/product/611845428564ef86adbcf02194dc65bc.jpg', '2022-09-25 08:02:45', '2022-09-25 08:02:45'),
(5, 'Roast Bean S', 'Sipirok', 'Rp 160.000/kg', '72913a89ad1527eed4f762f70d7553b2.jpg', 'S002', 'danger', 'http://localhost:5000/product/72913a89ad1527eed4f762f70d7553b2.jpg', '2022-09-25 08:03:11', '2022-09-25 08:03:11'),
(6, 'Coffee Powder S', 'Sipirok', 'Rp 180.000/kg', 'ef5d1364de5c306460a128c2051a8e47.jpg', 'S003', 'danger', 'http://localhost:5000/product/ef5d1364de5c306460a128c2051a8e47.jpg', '2022-09-25 08:03:44', '2022-09-25 08:03:44');

-- --------------------------------------------------------

--
-- Struktur dari tabel `roastbeanm`
--

CREATE TABLE `roastbeanm` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `roastbeanm`
--

INSERT INTO `roastbeanm` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'roast bean 1', '05083b7a7bcd4ef884c3e9287561a38c.jpg', 'http://localhost:5000/roastbeanm/05083b7a7bcd4ef884c3e9287561a38c.jpg', '2022-09-24 03:56:45', '2022-09-24 03:56:45'),
(2, 'roast bean 2', 'eadf6183e4308ba4d2c023c34fab8df3.jpg', 'http://localhost:5000/roastbeanm/eadf6183e4308ba4d2c023c34fab8df3.jpg', '2022-09-24 03:56:58', '2022-09-24 03:56:58'),
(3, 'roast bean 3', '838a9be1869d2b169824db4f79c12c20.jpg', 'http://localhost:5000/roastbeanm/838a9be1869d2b169824db4f79c12c20.jpg', '2022-09-24 03:57:13', '2022-09-24 03:57:13'),
(4, 'roast bean 4', '4991a0b42bbd25856e43c8cd13e7d63d.jpg', 'http://localhost:5000/roastbeanm/4991a0b42bbd25856e43c8cd13e7d63d.jpg', '2022-09-24 03:57:26', '2022-09-24 03:57:26');

-- --------------------------------------------------------

--
-- Struktur dari tabel `roastbeans`
--

CREATE TABLE `roastbeans` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `roastbeans`
--

INSERT INTO `roastbeans` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'roast bean 1', '72913a89ad1527eed4f762f70d7553b2.jpg', 'http://localhost:5000/roastbeans/72913a89ad1527eed4f762f70d7553b2.jpg', '2022-09-24 04:23:44', '2022-09-24 04:23:44'),
(2, 'roast bean 2', '4bb0d8cdb16333051d2734ff90fae041.jpg', 'http://localhost:5000/roastbeans/4bb0d8cdb16333051d2734ff90fae041.jpg', '2022-09-24 04:23:59', '2022-09-24 04:23:59'),
(3, 'roast bean 3', '1a41f57d38736b6f325b05068a740318.jpg', 'http://localhost:5000/roastbeans/1a41f57d38736b6f325b05068a740318.jpg', '2022-09-24 04:24:13', '2022-09-24 04:24:13'),
(4, 'roast bean 4', 'f479910d246fdfc6a591bdd2145b694b.jpg', 'http://localhost:5000/roastbeans/f479910d246fdfc6a591bdd2145b694b.jpg', '2022-09-24 04:24:27', '2022-09-24 04:24:27');

-- --------------------------------------------------------

--
-- Struktur dari tabel `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `services`
--

INSERT INTO `services` (`id`, `title`, `logo`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Integrity', 'fas fa-shield-alt fa-4x', 'Integrity means telling the truth, keeping our word and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.', '2022-09-23 14:58:38', '2022-09-24 13:34:51'),
(2, 'Quality', 'fas fa-crown fa-4x', 'Quality is exhibited in many ways by selling and supporting products and services that delight customers, establishing a work environment , delivering financial results that meet investor expectations.', '2022-09-23 14:59:11', '2022-09-24 13:36:00'),
(3, 'Commitment', 'fas fa-handshake fa-4x', 'Commitment is important where we will continue to provide the best to our customers and investors all the time. Our opportunity to serve should be viewed as a privilege that is not to be taken for granted.', '2022-09-23 14:59:44', '2022-09-24 13:36:15'),
(4, 'Innovation', 'fas fa-lightbulb fa-4x', 'Innovation means inventing, designing, developing products and services that have high appeal in the marketplace and strengthen customer preference for the Universal Coco Indonesia project.', '2022-09-23 15:00:03', '2022-09-24 13:36:29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sipirokcoffee`
--

CREATE TABLE `sipirokcoffee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `sipirokcoffee`
--

INSERT INTO `sipirokcoffee` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'sipirok 1', 'f48a3a8bcd454aa8cf473aae42917a82.jpg', 'http://localhost:5000/sipirokcoffealbum/f48a3a8bcd454aa8cf473aae42917a82.jpg', '2022-09-24 14:54:50', '2022-09-24 14:54:50'),
(2, 'sipirok 2', '8a85531857da3a73067659e93880503b.jpg', 'http://localhost:5000/sipirokcoffealbum/8a85531857da3a73067659e93880503b.jpg', '2022-09-24 14:55:01', '2022-09-24 14:55:01'),
(3, 'sipirok 3', 'e734ed12607feaae91d9be717d1c0b1e.jpg', 'http://localhost:5000/sipirokcoffealbum/e734ed12607feaae91d9be717d1c0b1e.jpg', '2022-09-24 14:55:12', '2022-09-24 14:55:12'),
(4, 'sipirok 4', 'b2dc03bf66499e912c360b03d7e627e5.jpg', 'http://localhost:5000/sipirokcoffealbum/b2dc03bf66499e912c360b03d7e627e5.jpg', '2022-09-24 14:55:23', '2022-09-24 14:55:23');

-- --------------------------------------------------------

--
-- Struktur dari tabel `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nick` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `css` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `teams`
--

INSERT INTO `teams` (`id`, `name`, `nick`, `position`, `css`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(2, 'Rizki Mulia P.', 'Alwido', 'Founder', 'snip1113 red', '70e37f3173f956d95be4bd65bdd80057.jpg', 'http://localhost:5000/teams/70e37f3173f956d95be4bd65bdd80057.jpg', '2022-09-24 04:44:56', '2022-09-24 14:29:44'),
(3, 'Fansuri N', 'Rivai', 'Web Developer', 'snip1113 blue', '0a6532a85e4a31dedbe63aa02dfaeb9c.jpg', 'http://localhost:5000/teams/0a6532a85e4a31dedbe63aa02dfaeb9c.jpg', '2022-09-24 04:45:26', '2022-09-24 14:31:12'),
(4, 'Coming', 'Up', 'Creator', 'snip1113', 'a6fd23340063bbdc84738eb56690a749.jpg', 'http://localhost:5000/teams/a6fd23340063bbdc84738eb56690a749.jpg', '2022-09-24 04:45:57', '2022-09-24 14:31:37');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `aboutproduct`
--
ALTER TABLE `aboutproduct`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `about_album`
--
ALTER TABLE `about_album`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `coffeepowderm`
--
ALTER TABLE `coffeepowderm`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `coffeepowders`
--
ALTER TABLE `coffeepowders`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `detailcm`
--
ALTER TABLE `detailcm`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `detailcs`
--
ALTER TABLE `detailcs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `detailgm`
--
ALTER TABLE `detailgm`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `detailgs`
--
ALTER TABLE `detailgs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `detailrm`
--
ALTER TABLE `detailrm`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `detailrs`
--
ALTER TABLE `detailrs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `greenbeanm`
--
ALTER TABLE `greenbeanm`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `greenbeans`
--
ALTER TABLE `greenbeans`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `mandhelingcoffee`
--
ALTER TABLE `mandhelingcoffee`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `navbar`
--
ALTER TABLE `navbar`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `roastbeanm`
--
ALTER TABLE `roastbeanm`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `roastbeans`
--
ALTER TABLE `roastbeans`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sipirokcoffee`
--
ALTER TABLE `sipirokcoffee`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `aboutproduct`
--
ALTER TABLE `aboutproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `about_album`
--
ALTER TABLE `about_album`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `coffeepowderm`
--
ALTER TABLE `coffeepowderm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `coffeepowders`
--
ALTER TABLE `coffeepowders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `detailcm`
--
ALTER TABLE `detailcm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `detailcs`
--
ALTER TABLE `detailcs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `detailgm`
--
ALTER TABLE `detailgm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `detailgs`
--
ALTER TABLE `detailgs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `detailrm`
--
ALTER TABLE `detailrm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `detailrs`
--
ALTER TABLE `detailrs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `greenbeanm`
--
ALTER TABLE `greenbeanm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `greenbeans`
--
ALTER TABLE `greenbeans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `mandhelingcoffee`
--
ALTER TABLE `mandhelingcoffee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `navbar`
--
ALTER TABLE `navbar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `roastbeanm`
--
ALTER TABLE `roastbeanm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `roastbeans`
--
ALTER TABLE `roastbeans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `sipirokcoffee`
--
ALTER TABLE `sipirokcoffee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
