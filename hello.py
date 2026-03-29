import random


def greet_player():
    print("=== Мини-игра: Угадай число ===")
    name = input("Как тебя зовут? ")
    print(f"Приятно познакомиться, {name}!")
    print("Я загадаю число от 1 до 50. У тебя будет 7 попыток, чтобы угадать его.")
    return name


def get_guess(attempt):
    while True:
        try:
            value = int(input(f"Попытка {attempt}/7. Введи число: "))
            if 1 <= value <= 50:  # if=если что-то там
                return value
            print("Пожалуйста, вводи число от 1 до 50.")
        except ValueError:
            print("Это не число. Попробуй снова.")


def play_round():
    secret = random.randint(1, 50)
    for attempt in range(1, 8):
        guess = get_guess(attempt)
        if guess == secret:
            return True, attempt, secret
        if guess < secret:
            print("Загаданное число больше.")
        else:  # во всех других случаях 
            print("Загаданное число меньше.")
    return False, 7, secret


def show_result(name, won, attempts, secret):
    if won:
        print(f"Ура, {name}! Ты угадал число за {attempts} попыток!")
    else:
        print(f"Жаль, {name}. Ты не угадал. Я загадал число {secret}.")


def ask_to_play_again():
    answer = input("Сыграть ещё раз? (д/н): ").strip().lower()
    return answer == "д"


def main():
    name = greet_player()
    while True:
        won, attempts, secret = play_round()
        show_result(name, won, attempts, secret)
        if not ask_to_play_again():
            break
    print("Спасибо за игру! До встречи.")


if __name__ == "__main__":
    main()
