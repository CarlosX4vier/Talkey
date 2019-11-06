-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 05-Nov-2019 às 19:51
-- Versão do servidor: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `talkey`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `conversas`
--

CREATE TABLE `conversas` (
  `id_conv` int(11) NOT NULL,
  `user_conv` int(11) NOT NULL,
  `texto_conv` varchar(255) NOT NULL,
  `data_conv` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id_user` int(11) NOT NULL,
  `nome_user` varchar(50) NOT NULL,
  `sobrenome_user` varchar(60) NOT NULL,
  `email_user` varchar(255) NOT NULL,
  `pass_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id_user`, `nome_user`, `sobrenome_user`, `email_user`, `pass_user`) VALUES
(1, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(2, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(3, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(4, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(5, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(6, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(7, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(8, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(9, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(10, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(11, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(12, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(13, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(14, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(15, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(16, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234),
(17, 'carlos', 'xavier', 'carlosxavier@gmail.com', 1234);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `conversas`
--
ALTER TABLE `conversas`
  ADD PRIMARY KEY (`id_conv`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `conversas`
--
ALTER TABLE `conversas`
  MODIFY `id_conv` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
