import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedAge, setSelectedAge] = useState("");

  const ageGroups = [
    { label: "0-3 года", value: "0-3", color: "bg-magical-teal" },
    { label: "4-6 лет", value: "4-6", color: "bg-magical-lavender" },
    { label: "7-10 лет", value: "7-10", color: "bg-magical-beige-dark" },
    { label: "11+ лет", value: "11+", color: "bg-magical-teal-light" },
  ];

  const featuredBooks = [
    {
      title: "Волшебные приключения",
      author: "А. Сказочник",
      age: "4-6",
      cover: "📚",
    },
    {
      title: "Космические истории",
      author: "И. Звездочёт",
      age: "7-10",
      cover: "🚀",
    },
    {
      title: "Сказки о животных",
      author: "Н. Добрый",
      age: "0-3",
      cover: "🦔",
    },
    {
      title: "Тайны древних замков",
      author: "М. Историк",
      age: "11+",
      cover: "🏰",
    },
  ];

  const events = [
    {
      title: "Читаем вместе с совушкой",
      date: "15 июля",
      time: "10:00",
      age: "0-3",
    },
    { title: "Сказочный театр", date: "18 июля", time: "14:00", age: "4-6" },
    {
      title: "Мастер-класс по иллюстрации",
      date: "22 июля",
      time: "11:00",
      age: "7-10",
    },
    { title: "Литературный клуб", date: "25 июля", time: "16:00", age: "11+" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-magical-lavender/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-magical-teal rounded-full flex items-center justify-center animate-float">
                <span className="text-2xl">🦉</span>
              </div>
              <div>
                <h1 className="text-2xl font-caveat font-bold text-magical-teal">
                  Детство
                </h1>
                <p className="text-sm text-gray-600">
                  Городская детская библиотека
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-magical-teal transition-colors"
              >
                О библиотеке
              </a>
              <a
                href="#catalog"
                className="text-gray-700 hover:text-magical-teal transition-colors"
              >
                Каталог
              </a>
              <a
                href="#events"
                className="text-gray-700 hover:text-magical-teal transition-colors"
              >
                Мероприятия
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-magical-teal transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-magical-lavender hover:bg-magical-lavender/80 text-gray-800">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/82797f76-2e61-4b85-9317-483163f2d6bd.jpg"
            alt="Magical library"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-caveat font-bold text-magical-teal mb-6">
                Добро пожаловать в мир сказок!
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Детская библиотека "Детство" — это волшебное место, где оживают
                книги, а мудрые совушки помогают маленьким читателям открывать
                новые миры.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-magical-teal hover:bg-magical-teal/80 text-white"
                >
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Найти книгу
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-magical-lavender text-magical-teal hover:bg-magical-lavender/20"
                >
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Мероприятия
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/8e3dd799-0d76-4ebd-8a78-b5c25ff1ae3e.jpg"
                alt="Owl librarian"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl animate-float"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-magical-lavender rounded-full animate-sparkle"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-magical-teal rounded-full animate-sparkle delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-magical-beige-dark rounded-full animate-sparkle delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-caveat font-bold text-center text-magical-teal mb-12">
            О нашей библиотеке
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 border-magical-lavender/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-magical-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-magical-teal" />
                </div>
                <h4 className="text-xl font-caveat font-semibold mb-3">
                  Для родителей
                </h4>
                <p className="text-gray-600">
                  Помогаем выбрать подходящие книги для развития вашего ребёнка.
                  Консультации по детскому чтению и развивающим программам.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 border-magical-lavender/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-magical-lavender/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="BookOpen"
                    size={32}
                    className="text-magical-teal"
                  />
                </div>
                <h4 className="text-xl font-caveat font-semibold mb-3">
                  Онлайн-каталог
                </h4>
                <p className="text-gray-600">
                  Удобный поиск книг по возрасту, жанрам и интересам.
                  Электронные книги и аудиосказки доступны 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 border-magical-lavender/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-magical-beige-dark/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={32} className="text-magical-teal" />
                </div>
                <h4 className="text-xl font-caveat font-semibold mb-3">
                  Читательский дневник
                </h4>
                <p className="text-gray-600">
                  Личный кабинет для отслеживания прочитанных книг, достижений и
                  персональных рекомендаций.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-caveat font-bold text-center text-magical-teal mb-12">
            Каталог книг
          </h3>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="relative max-w-md w-full">
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <Input
                  placeholder="Поиск книг по названию, автору..."
                  className="pl-10 border-magical-lavender/50 focus:border-magical-teal"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {ageGroups.map((group) => (
                  <Badge
                    key={group.value}
                    variant={
                      selectedAge === group.value ? "default" : "outline"
                    }
                    className={`cursor-pointer transition-colors ${
                      selectedAge === group.value
                        ? `${group.color} text-white hover:opacity-80`
                        : "hover:bg-magical-lavender/20"
                    }`}
                    onClick={() =>
                      setSelectedAge(
                        selectedAge === group.value ? "" : group.value,
                      )
                    }
                  >
                    {group.label}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book, index) => (
              <Card
                key={index}
                className="bg-white/80 border-magical-lavender/30 hover:shadow-lg transition-all hover:scale-105"
              >
                <CardContent className="p-4">
                  <div className="text-6xl text-center mb-4">{book.cover}</div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {book.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">{book.author}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">
                      {book.age}
                    </Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-magical-teal hover:bg-magical-teal/10"
                    >
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-magical-lavender hover:bg-magical-lavender/80 text-gray-800">
              Показать больше книг
            </Button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-caveat font-bold text-center text-magical-teal mb-12">
            Мероприятия и программы
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card
                key={index}
                className="bg-white/80 border-magical-lavender/30 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-caveat font-semibold text-gray-800 mb-2">
                        {event.title}
                      </h4>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        <span>{event.date}</span>
                        <Icon name="Clock" size={16} className="ml-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {event.age}
                    </Badge>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-magical-teal text-magical-teal hover:bg-magical-teal/10"
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-caveat font-bold text-center text-magical-teal mb-12">
            Цифровые сервисы
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-magical-teal/10 to-magical-lavender/10 border-magical-teal/30">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Headphones"
                  size={48}
                  className="text-magical-teal mx-auto mb-4"
                />
                <h4 className="text-xl font-caveat font-semibold mb-3">
                  Аудиосказки
                </h4>
                <p className="text-gray-600 mb-4">
                  Более 500 аудиокниг и сказок для прослушивания онлайн
                </p>
                <Button
                  variant="outline"
                  className="border-magical-teal text-magical-teal"
                >
                  Слушать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-magical-lavender/10 to-magical-beige/10 border-magical-lavender/30">
              <CardContent className="p-6 text-center">
                <Icon
                  name="TabletSmartphone"
                  size={48}
                  className="text-magical-teal mx-auto mb-4"
                />
                <h4 className="text-xl font-caveat font-semibold mb-3">
                  Электронные книги
                </h4>
                <p className="text-gray-600 mb-4">
                  Читайте любимые книги на планшете или телефоне
                </p>
                <Button
                  variant="outline"
                  className="border-magical-lavender text-magical-teal"
                >
                  Читать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-magical-beige/10 to-magical-teal/10 border-magical-beige-dark/30">
              <CardContent className="p-6 text-center">
                <Icon
                  name="BookMarked"
                  size={48}
                  className="text-magical-teal mx-auto mb-4"
                />
                <h4 className="text-xl font-caveat font-semibold mb-3">
                  Личный кабинет
                </h4>
                <p className="text-gray-600 mb-4">
                  Ведите читательский дневник и получайте рекомендации
                </p>
                <Button
                  variant="outline"
                  className="border-magical-beige-dark text-magical-teal"
                >
                  Войти
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-magical-teal/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-magical-teal rounded-full flex items-center justify-center">
                  <span className="text-xl">🦉</span>
                </div>
                <h5 className="text-xl font-caveat font-bold text-magical-teal">
                  Детство
                </h5>
              </div>
              <p className="text-gray-600">
                Городская детская библиотека, где каждая книга — это новое
                приключение!
              </p>
            </div>

            <div>
              <h6 className="font-semibold text-gray-800 mb-4">Контакты</h6>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span>ул. Сказочная, 123</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>+7 (123) 456-78-90</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  <span>info@detstvo-lib.ru</span>
                </div>
              </div>
            </div>

            <div>
              <h6 className="font-semibold text-gray-800 mb-4">Время работы</h6>
              <div className="space-y-1 text-gray-600">
                <p>Пн-Пт: 9:00 — 19:00</p>
                <p>Сб-Вс: 10:00 — 17:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-magical-lavender/30 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Детская библиотека "Детство". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
